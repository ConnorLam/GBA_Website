from app.models import db, Group


def seed_groups():
    groups = [
    {
        "name": "Tournament Team"
    },
    {
        "name": "High School"
    },
    {
        "name": "Intermediate"
    },
    {
        "name": "Beginner"
    },
    
    ]

    for group in groups:
        new_group = Group(
            name=group["name"],
            
        )
        db.session.add(new_group)

    db.session.commit()


def undo_groups():
    db.session.execute("TRUNCATE posts RESTART IDENTITY CASCADE;")
    db.session.commit()
