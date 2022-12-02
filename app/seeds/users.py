from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', first_name='Demo', last_name='User', email='demo@aa.io', password='password')
    irene = User(
        username='Irene', first_name='Irene', last_name='Lee', email='irene@aa.io', password='password')
    eti = User(
        username='Eti', first_name='Eti', last_name='Gunawan', email='eti@aa.io', password='password')

    db.session.add(demo)
    db.session.add(irene)
    db.session.add(eti)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
