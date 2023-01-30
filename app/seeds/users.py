from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    connor = User(
        username='Connor', first_name='Connor', last_name='Lam', email='connorlam03@gmail.com', password='password')
    eti = User(
        username='Eti', first_name='Eti', last_name='Gunawan', email='etigunawan09@gmail.com', password='etigunawan')

    db.session.add(connor)
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
