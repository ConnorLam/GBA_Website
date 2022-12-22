from .db import db
from sqlalchemy.sql import func


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    description = db.Column(db.String(2000), nullable=False)
    time_created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    time_updated = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    owner = db.relationship('User', back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'description': self.description,
            'timeCreate': self.time_created,
            'timeUpdated': self.time_updated,
            'owner': self.owner.to_dict()
        }