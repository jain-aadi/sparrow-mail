from backend.repositeries.campaign_repo import CampaignRepository
from backend.repositeries.contact_repo import ContactRepository
from backend.services.email_service import EmailService
from backend.utils.email import ResendProvider
from sqlalchemy.ext.asyncio import AsyncSession

class CampaignService:
    def __init__(self, campaign_repo: CampaignRepository, contact_repo: ContactRepository):
        self.campaign_repo = campaign_repo
        self.contact_repo = contact_repo
        self.email_service = EmailService(ResendProvider())

    async def create_campaign(self, name, subject, content):
        if len(subject) < 3:
            raise ValueError("Subject too short")

        return await self.campaign_repo.create_campaign(name, subject, content)

    async def list_campaigns(self):
        return await self.campaign_repo.get_all_campaigns()
    
    async def start_campaign(self, campaign_id: int, background_tasks, db: AsyncSession):
        
        # 1. Get campaign
        campaign = await self.campaign_repo.get_by_id(campaign_id)

        if not campaign:
            raise Exception("Campaign not found")
        
        if campaign.status == "running":
            raise Exception("campaign already running...")

        campaign.status = "running"
        await db.commit()
        # 2. Get all contacts
        contacts = await self.contact_repo.get_all_contacts()

        # 3. Send email to each contact (in background)
        for contact in contacts:
            background_tasks.add_task(
                self.email_service.send,
                contact.email,
                campaign.subject,
                campaign.body
            )

        campaign.status = "completed"
        await db.commit()

        return {"message": "Campaign started"}
    
