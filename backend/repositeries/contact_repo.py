from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from backend.models import Contact

class ContactRepository:
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create_contact(self, name: str, email: str):
        new_contact = Contact(name=name, email=email)
        self.db.add(new_contact)
        await self.db.commit()
        await self.db.refresh(new_contact)
        return new_contact
    
    async def get_all_contacts(self):
        result = await self.db.execute(select(Contact))
        return result.scalars().all()