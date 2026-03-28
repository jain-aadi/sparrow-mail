from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from backend.models import Campaign

class CampaignRepository:
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create_campaign(self, name: str, subject: str, content: str):
        new_campaign = Campaign(name=name, subject=subject, body=content)
        self.db.add(new_campaign)
        await self.db.commit()
        await self.db.refresh(new_campaign)
        return new_campaign
    
    async def get_all_campaigns(self):
        result = await self.db.execute(select(Campaign))
        return result.scalars().all()
    
    async def get_by_id(self, id: int):
        result = await self.db.execute(select(Campaign).where(Campaign.id == id))
        return result.scalar_one_or_none()