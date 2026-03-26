from backend.repositeries.contact_repo import ContactRepository

class ContactService:
    def __init__(self, contact_repo: ContactRepository):
        self.contact_repo = contact_repo

    async def create_contact(self, name: str, email: str):
        if '@' not in email:
            raise ValueError("Invalid email.")
        return await self.contact_repo.create_contact(name=name, email=email)
    
    async def list_contacts(self, user_id: int):
        return await self.contact_repo.get_all_contacts()