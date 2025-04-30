import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

import { InputFormLogin } from "../../components/InputForm/inputFormLogin";
import { FormValuesLogIn, schema_login } from "../../components/models";
import './login.css'

export const LoginPage = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<FormValuesLogIn>({
        resolver: zodResolver(schema_login),
        mode: 'onBlur'
    });


    // Estado para manejar la respuesta
    const [apiError, setApiError] = useState<Error | null>(null);
    const onSubmit: SubmitHandler<FormValuesLogIn> = async (fields) => {
        setApiError(null);
        const username = fields.username
        const password = fields.password
        
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            };

            const response = await fetch('http://127.0.0.1:8000/users/login/', options);

            const data = await response.json();

            if (!response.ok) {         
                throw new Error(`HTTP error! status: ${response.status }`);
            }

            localStorage.setItem('userData', JSON.stringify({
                isAuthenticated: true,
                csrfToken: data.csrf_token,
                user: data.user
            }));

            navigate('/')
        } catch (error) {
            setApiError(error as Error);
            console.log(error)
        }
    };

    if (apiError) {
        return(
            <div>Error</div>
        )
    }
    return (
        <div className='login__wrapper'>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <InputFormLogin name="username" control={control} label="Username" type="text" error={errors.username}></InputFormLogin>
                <InputFormLogin name="password" control={control} label="Password" type="password" error={errors.password}></InputFormLogin>
                <button type="submit" className="btn btn-primary btn-login">Submit</button>
                <Link to={'/Register'} className="login-form__link">Don't have an account?</Link>
                <Link to={''} className="login-form__link">Forgot password?</Link>
            </form>
        </div>
    )
}