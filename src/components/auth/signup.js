import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux'

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error }}) => (
    <div>
         <label>{label}</label>
        <div className={asyncValidating ? 'btn-danger' : ''}>
        <input className="form-control" {...input} type={type} placeholder={label}/>
        {touched && error && <span className="label label-danger">{error}</span>}
        </div>
    </div>
)

class Signup extends Component {
    renderAlert() {

        console.log(this.props.errorMessage)
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, signupUser, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(signupUser)}>
                <fieldset className="form-group">
                    <Field name="email" component={renderField} label="Email" />
                </fieldset>
                <fieldset className="form-group">
                    <Field type="password" name="password" component={renderField} label="Password" />
                </fieldset>
                <fieldset className="form-group">
                    <Field type="password" name="passwordConfirm" component={renderField} label="Confirm Password" />
                </fieldset>
                {this.renderAlert()}
                <button type="submit" className="btn btn-primary" disabled={submitting}>Sing up!</button>
            </form>
        );
    }
}

const validate = (formProps) => {
  const errors = {};

  if (!formProps.email) {
      errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
      errors.password = 'Please enter a password'
  }

  if (!formProps.passwordConfirm) {
      errors.passwordConfirm = 'Please enter a password confirmation'
  }

  if (formProps.password !== formProps.passwordConfirm) {
      errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error }
}

let signupForm =  reduxForm({
    form: 'signup',
    validate
})(Signup);

signupForm = connect(mapStateToProps, actions)(signupForm)

export default signupForm


