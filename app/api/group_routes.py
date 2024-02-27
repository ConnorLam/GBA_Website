from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Student, db, Group
from.auth_routes import validation_errors_to_error_messages
from app.forms import CreateGroupForm

group_routes = Blueprint("groups", __name__)

@group_routes.route('')
@login_required
def get_all_groups():
    groups = Group.query.all()

    return {
        'groups': [group.to_dict() for group in groups]
    }

@group_routes.route('groups-with-students')
@login_required
def get_students_in_groups():
    groups = Group.query.all()

    return {
        "groups": [group.to_dict_with_students() for group in groups]
    }

@group_routes.route('<int:id>')
@login_required
def get_group_by_id(id):
    group = Group.query.get(id)

    if not group:
        return {"message": "Group could not be found", "statusCode": 404}, 404

    return {
        "groups": group.to_dict()
    }

@group_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_group(id):
    group = Group.query.get(id)

    if not group:
        return {"message": "Group could not be found", "statusCode": 404}, 404

    db.session.delete(group)
    db.session.commit()

    return {"message": "Succesfully deleted", "statusCode": 200}, 200


@group_routes.route("", methods=["POST"])
@login_required
def create_group():
    form = CreateGroupForm()

    if not current_user:
        return {"message": "No user", "statusCode": 404}, 404

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        group = Group(
            name = form.name.data
        )

        db.session.add(group)
        db.session.commit()

        return group.to_dict()
    
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@group_routes.route("<int:id>", methods=['PUT'])
@login_required
def edit_group(id):
    group = Group.query.get(id)

    if not group:
        return {"message": "Post could not be found", "statusCode": 404}, 404

    form = CreateGroupForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        group.name = form.name.data

        db.session.commit()

        return group.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
