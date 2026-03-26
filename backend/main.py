from fastapi import FastAPI
from backend.api.contact_routes import router as contact_router
from backend.db import base, engine

app = FastAPI()

app.include_router(contact_router)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(base.metadata.create_all)