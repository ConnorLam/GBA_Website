from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Student

class CreateStudentForm(FlaskForm):
    firstName = StringField(
        "First Name", validators=[DataRequired("First Name is required")]
    )
    lastName = StringField(
        "Last Name", validators=[DataRequired("Last Name is required")]
    )
    email = StringField("email", validators=[DataRequired()])
    parentName = StringField('Parent Name', validators=[DataRequired("Last Name is required")])
    parentEmail = StringField("email", validators=[DataRequired()])
    group = StringField('group', )
