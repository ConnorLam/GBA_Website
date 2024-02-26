from .db import db


class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    students = db.relationship("Student", backref='group', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }

#still have to create relationships for group and student
# one student to a group, but a group can have mant students