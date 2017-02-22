import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error }}) => (
    <div>
         <label>{label}</label>
        <div className={asyncValidating ? 'btn-danger' : ''}>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
        </div>
    </div>
)
var pump = () => {
console.log(11)
}
class Signup extends Component {
    handleFormSubmit(formProps) {
        console.log(formProps)
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field className="form-control" name="email" component={renderField} label="Email" />
                </fieldset>
                <fieldset className="form-group">
                    <Field className="form-control" type="password" name="password" component={renderField} label="Password" />
                </fieldset>
                <fieldset className="form-group">
                    <Field className="form-control" type="password" name="passwordConfirm" component={renderField} label="Confirm Password:" />
                </fieldset>
                <button type="submit" className="btn btn-primary" disabled={submitting}>Sing up!</button>
            </form>
        );
    }
}

const validate = (formProps) => {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
      errors.password = 'Passwords must match';
  }

  return errors;
}

let signupForm =  reduxForm({
    form: 'signup',
    validate
})(Signup);

export default signupForm
