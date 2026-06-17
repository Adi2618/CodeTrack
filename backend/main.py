from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import engine, Base, SessionLocal
import models
from schemas import UserCreate

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def home():
    return {"message": "CodeTrack Backend Running"}
    
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
@app.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    
    new_user = models.User(
        username=user.username,
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User created successfully"
    }
