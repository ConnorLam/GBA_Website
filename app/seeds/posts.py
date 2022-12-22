from app.models import db, Post

def seed_posts():
    posts = [
        {
            'owner_id': 3,
            'description': 'Hello students'
        },
        {
            'owner_id': 3,
            'description': 'fhjasdhfjlkasfh'
        },
        {
            'owner_id': 3,
            'description': 'safjashfjklsdhfjklasdf'
        },
        {
            'owner_id': 3,
            'description': 'fhasdjhfjklahsfjlhasdjk'
        },
        {
            'owner_id': 3,
            'description': 'dshajfhjklasdhfjklahsdjklfhajklsfh'
        }

    ]

    for post in posts: 
        new_post = Post(
            owner_id = post['owner_id'],
            description = post['description']
        )
        db.session.add(new_post)

    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
