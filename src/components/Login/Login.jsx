import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";
import { login } from "../../redux/auth-reducer";

import style from "../common/FormControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    console.log('captchaUrl', captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"email"} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"password"} type={"password"} placeholder={"password"} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&
                <Field component={Input} name={"captcha"} type={"text"} placeholder={"Symbols from image"} validate={[required]} />}
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div><button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);