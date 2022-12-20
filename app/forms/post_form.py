from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange

def description_length(form, field):
    description = field.data
    if len(description) > 2000 or len(description < 5):
        raise ValidationError('Description must be between 5 and 2000 characters')

class CreateBusinessForm(FlaskForm):

    description = StringField('Description', validators=[DataRequired(), description_length])