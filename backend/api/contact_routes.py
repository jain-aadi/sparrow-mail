from fastapi import APIRouter
from backend.db import AsyncSessionLocal
from backend.repositeries.contact_repo import ContactRepository
from backend.schemas import ContactCreate, ContactResponse
from backend.services.contact_service import ContactService

router = APIRouter() 

@router.post("/contacts", response_model=ContactResponse)
async def create_contact(data: ContactCreate):
    async with AsyncSessionLocal() as db:
        repo = ContactRepository(db)
        service = ContactService(repo)
        contact = await service.create_contact(data.name, data.email)
        return contact

@router.get("/contacts", response_model=list[ContactResponse])
async def get_contacts():
    async with AsyncSessionLocal() as db:
        repo = ContactRepository(db)
        service = ContactService(repo)
        contacts = await service.list_contacts()
        return contacts