from app.models import db, Student


def seed_students():
    students = [
        {"first_name": 'Don', 'last_name': 'Averia', 'email': 'don@gmail.com', 'parent_name': 'Test', 'parent_email': 'test@gmail.com', 'group_id': 1, },
        {"first_name": 'Kodi', 'last_name': 'Lee', 'email': 'kodi@gmail.com', 'parent_name': 'Test', 'parent_email': 'test@gmail.com', 'group_id': 2, },
        {"first_name": 'Codey', 'last_name': 'Ma', 'email': 'codey@gmail.com', 'parent_name': 'Test', 'parent_email': 'test@gmail.com', 'group_id': 3, },
        {"first_name": 'Irene', 'last_name': 'Lee', 'email': 'irene@gmail.com', 'parent_name': 'Test', 'parent_email': 'test@gmail.com', 'group_id': 4, },
        {"first_name": 'Owen', 'last_name': 'Che', 'email': 'owen@gmail.com', 'parent_name': 'Test', 'parent_email': 'test@gmail.com', 'group_id': 1, },
    ]

    for student in students:
        new_student = Student(first_name = student["first_name"], last_name = student['last_name'],
                              email = student["email"], parent_name = student['parent_name'],
                              parent_email = student['parent_email'], group_id = student['group_id'])
        db.session.add(new_student)

    db.session.commit()


def undo_students():
    db.session.execute("TRUNCATE posts RESTART IDENTITY CASCADE;")
    db.session.commit()
