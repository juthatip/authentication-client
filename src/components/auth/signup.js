import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps) {
        console.log(formProps)
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input className="form-control" component={renderField} />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input className="form-control" type="password" component={renderField} />
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input className="form-control" type="password" component="{renderField}" />
                </fieldset>
                <button type="submit" className="btn btn-primary">Sing up!</button>
            </form>
        );
    }
}

const renderField = ({ input , meta: { asyncValidating, touched, error }}) => (
    <div>
         <label>{label}</label>
        <div className={asyncValidating ? 'btn-danger' : ''}>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const validate = (formProps) => {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
      errors.password = 'Passwords must match';
  }

  console.log(formProps)

  return errors;
}

let signupForm =  reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(Signup);

export default signupForm