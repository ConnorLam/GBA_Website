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

@student_routes.route('<int:id>')
@login_required
def get_student_by_id(id):
    student = Student.query.get(id)

    if not student:
        return {"message": "Student could not be found", "statusCode": 404}, 404

    # group_name = student.group.name
    # print('\n\n\n', group_name, '\n\n\n')

    return student.to_dict()

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

@student_routes.route('<int:id>', methods=['PUT'])
@login_required
def edit_student(id):
    student = Student.query.get(id)

    if not student:
        return {"message": "Student could not be found", "statusCode": 404}, 404

    form = CreateStudentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        student.first_name = form.firstName.data
        student.last_name = form.lastName.data
        student.email = form.email.data
        student.parent_name = form.parentName.data
        student.parent_email = form.parentEmail.data
        student.group = form.group.data

        db.session.commit()

        return student.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@student_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_student(id):
    student = Student.query.get(id)

    if not student:
        return {'message': "Student could not be found", 'statusCode': 404}, 404

    db.session.delete(student)
    db.session.commit()

    return {"message": "Succesfully deleted", "statusCode": 200}, 200
