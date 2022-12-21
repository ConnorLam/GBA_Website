from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import User, Post, db
from app.forms.post_form import CreatePostForm

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

@post_routes.route('')
def get_all_post():
    posts = Post.query.all()

    return {
        'posts': [post.to_dict() for post in posts]
    }

@post_routes.route('/current')
@login_required
def get_post_of_user():
    posts = Post.query.filter(Post.owner_id == current_user.id).all()

    return {
        'posts': [post.to_dict() for post in posts]
    }


@post_routes.route('', methods=['POST'])
@login_required
def create_post():
    form = CreatePostForm()

    if not current_user:
        return {'message': 'No user', 'statusCode': 404}, 404

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            owner_id = current_user.id,
            description = form.description.data
        )
        
        db.session.add(post)
        db.session.commit()
        
        return post.to_dict()
    
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@post_routes.route('<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    post = Post.query.get(id)

    if not post:
        return {'message': "Post could not be found", 'statusCode': 404}, 404

    if post.owner_id != current_user.id:
        return {'message': 'Forbidden', 'statusCode': 403}, 403

    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post.owner_id = current_user.id
        post.description = form.description.data

        db.session.commit()

        return post.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@post_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)

    if not post:
        return {'message': "Post could not be found", 'statusCode': 404}, 404

    if post.owner_id != current_user.id:
        return {'message': 'Forbidden', 'statusCode': 403}, 403

    db.session.delete(post)
    db.session.commit()

    return {"message": 'Succesfully deleted', 'statusCode': 404}, 404



