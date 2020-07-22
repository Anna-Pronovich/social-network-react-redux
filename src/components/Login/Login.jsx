import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} placeholder={"login"} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"password"} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
            <div><button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;