from sqlalchemy import Integer, String, Column
from .db import base

class Contact(base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)

class Campaign(base):
    __tablename__ = "campaign"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    subject = Column(String)
    body = Column(String)
    status = Column(String, default="draft")