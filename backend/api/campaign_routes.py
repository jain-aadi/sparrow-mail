from fastapi import APIRouter, BackgroundTasks
from backend.schemas import CampaignCreate, CampaignResponse
from backend.db import AsyncSessionLocal
from backend.repositeries.campaign_repo import CampaignRepository
from backend.repositeries.contact_repo import ContactRepository
from backend.services.campaign_service import CampaignService

router = APIRouter()

@router.post("/campaigns", response_model=CampaignResponse)
async def create_campaign(data: CampaignCreate):
    async with AsyncSessionLocal() as db:
        campaign_repo = CampaignRepository(db)
        contact_repo = ContactRepository(db)

        service = CampaignService(campaign_repo=campaign_repo, contact_repo=contact_repo)

        return await service.create_campaign(
            data.name, data.subject, data.body
        )


@router.get("/campaigns", response_model=list[CampaignResponse])
async def get_campaigns():
    async with AsyncSessionLocal() as db:
        campaign_repo = CampaignRepository(db)
        contact_repo = ContactRepository(db)

        service = CampaignService(campaign_repo=campaign_repo, contact_repo=contact_repo)

        return await service.list_campaigns()
    
@router.post("/campaigns/{campaign_id}/start")
async def start_campaing(campaign_id: int, background_tasks: BackgroundTasks):
    async with AsyncSessionLocal() as db:
        campaign_repo = CampaignRepository(db)
        contact_repo = ContactRepository(db)

        service = CampaignService(campaign_repo=campaign_repo, contact_repo=contact_repo)

        return await service.start_campaign(campaign_id=campaign_id, background_tasks=background_tasks, db=db)