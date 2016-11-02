import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends Component {

    onSubmit(props) {
    // this.props.createPost(props)
    //   .then(() => {
    //     // blog post has been created, navigate the user to the index
    //     // We navigate by calling this.context.router.push with the
    //     // new path to navigate to.
    //     this.context.router.push('/');
    //   });
    }

    renderInput(field) {
        return(
                <div className={`form-group ${field.meta.touched && field.meta.invalid ? 'has-danger' : ''}`}>
                    <label>{field.name}</label>
                    <input {...field.input} type={field.type}/>  // Type specified below in <Field>
                    {field.meta.touched &&
                     field.meta.error &&
                     <span className="error">{field.meta.error}</span>}
                 </div>
            )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Welcome</h3>
                <Field type="text" name="email" className="form-control" component={this.renderInput} />
                <Field type="text" name="password" className="form-control" component={this.renderInput} />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.title = 'Please enter a valid email';
  }

  if(!values.password) {
    errors.content = 'Please enter a password';
  }

  return errors;
}

export default reduxForm({
  form: 'LoginForm',
  //fields: ['email', 'password'],
  validate
}, null, null)(LoginForm);
