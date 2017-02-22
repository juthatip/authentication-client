import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { signinUser }  from '../../actions/index';

class Signin extends Component {

  render() {
    // const { handleSubmit, fields: { email, password }} = this.props;
    const { handleSubmit, signinUser } = this.props;

    return (
      <form onSubmit={handleSubmit(signinUser)}>
        {/*<h3>Create A New Post</h3>*/}
        <div className="form-group">
          <label>Email</label>
          <Field type="text" className="form-control" name="email" component="input" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <Field type="password" className="form-control" name="password" component="input" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is from config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

let signinForm = reduxForm({
  form: 'signin'
})(Signin)
//
signinForm = connect(null, { signinUser })(signinForm)

export default signinForm
