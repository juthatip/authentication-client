import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps) {
        console.log("================form===============", formProps)
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="form-group">
                    <Field className="form-group" type="text"  label="Email" component={renderField}>
                        <input className="form-control" name="email"  />
                    </Field>
                </div>
                <div className="form-group">
                    <Field className="form-control" name="password" type="password" component={renderField} label="password" />
                    
                </div>
                <div className="form-group">
                    <Field className="form-control" name="passwordConfirm" type="password" component={renderField} label="passwordConfirm" />
                </div>                                
                {/*<fieldset className="form-group">
                    <label>Password:</label>
                    <input className="form-control" type="password" component={renderField} />
                    {validate}
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input className="form-control" type="password" component="{renderField}" />
                    {validate}
                </fieldset>*/}
                <button type="submit" className="btn btn-primary">Sing up!</button>
            </form>
        );
    }
}

const renderField = ({ input, label , type, meta: { asyncValidating, touched, error }}) => (
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