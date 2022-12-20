from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    description = db.Column(db.String(2000), nullable=False)

    owner = db.relationship('User', back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'description': self.description,
            'owner': self.owner.to_dict()
        }