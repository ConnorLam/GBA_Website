from .db import db

class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    parent_name = db.Column(db.String(100), nullable=False)
    parent_email = db.Column(db.String(100), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"))

    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            'email': self.email,
            'parentName': self.parent_name,
            'parentEmail': self.parent_email,
            'group': self.group
        }
