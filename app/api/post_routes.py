from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

post_routes = Blueprint('posts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

# @post_routes.route('', methods=['POST'])
# @login_required
# def create_post():
