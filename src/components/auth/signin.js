import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { fetchPosts }  from '../../actions/index';

class Signin extends Component {

  // constructor(props) {
  //   super(props);

  //   this.handleFormSubmit = this.handleFormSubmit.bind(this);
  // }

  componentWillMount(){
   this.props.fetchPosts();
  }

  handleFormSubmit({email , password}) {

     
    // Need to do something to log user in
    // this.props.signinUser({ email, password});
  }

  render() {
    // const { handleSubmit, fields: { email, password }} = this.props;
    const { handleSubmit } = this.props; 
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {/*<h3>Create A New Post</h3>*/}
        <div className="form-group">
          <label>Email</label>
          <Field type="text" className="form-control" name="email" component="input" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <Field type="text" className="form-control" name="password" component="input" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is from config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, { fetchPosts } )(Signin);