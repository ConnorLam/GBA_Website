from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from datetime import datetime


class Post(db.Model):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    description = db.Column(db.String(2000), nullable=False)
    time_created = db.Column(db.DateTime(timezone=True), server_default=db.func.current_timestamp())
    time_updated = db.Column(db.DateTime(timezone=True), onupdate=db.func.current_timestamp())

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