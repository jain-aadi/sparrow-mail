from pydantic import BaseModel

class ContactCreate(BaseModel):
    name: str
    email: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True

class CampaignCreate(BaseModel):
    name: str
    subject: str
    body: str

class CampaignResponse(BaseModel):
    id: int
    name: str
    subject: str
    body: str

    class Config:
        from_attributes = True
