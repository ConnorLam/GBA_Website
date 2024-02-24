from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Student, db
from app.forms.student_form import CreateStudentForm
from.auth_routes import validation_errors_to_error_messages

student_routes = Blueprint("students", __name__)

@student_routes.route('')
@login_required
def get_all_students():
    students = Student.query.all()

    return {
        'students': [student.to_dict() for student in students]
    }

@student_routes.route('', methods=['POST'])
@login_required
def create_student():
    form = CreateStudentForm()

    if not current_user:
        return {"message": "No user", "statusCode": 403}, 403
    
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        student = Student(
            first_name = form.data['firstName'],
            last_name = form.data['lastName'],
            email = form.data['email'],
            parent_name = form.data['parentName'],
            parent_email = form.data['parentEmail'],
            group = form.data['group']
        )
        db.session.add(student)
        db.session.commit()

        return student.to_dict()
    
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
