from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange


class CreateBusinessForm(FlaskForm):
    description = StringField('Description', validators=[DataRequired()])