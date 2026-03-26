from pydantic import BaseModel

class ContactCreate(BaseModel):
    name: str
    email: str

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str

    class Config:
        from_attributes = True