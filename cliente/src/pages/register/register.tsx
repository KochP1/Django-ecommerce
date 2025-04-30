import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import { InputForm } from "../../components/InputForm/inputForm";
import { FormValues, schema } from "../../components/models";
import { useFetch } from "../../hooks";
import './register.css'

export const RegisterPage = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: 'onBlur'
    });


    // Estado para manejar la respuesta
    const [response, setResponse] = useState<any>(null);
    const [apiError, setApiError] = useState<Error | null>(null);

    const onSubmit: SubmitHandler<FormValues> = async (datas) => {
        setApiError(null);
        
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datas)
            };

            const response = await fetch('http://127.0.0.1:8000/users/regist_user/', options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setResponse(result);
            navigate('/')
        } catch (error) {
            setApiError(error as Error);
            console.log(error)
        }
    };


    return (
        <div className='register__wrapper'>
            <form className='regist-form' onSubmit={handleSubmit(onSubmit)}>
                <InputForm name="name" control={control} label="Name" type="text" error={errors.name}></InputForm>
                <InputForm name="lastName" control={control} label="Last Name" type="text" error={errors.lastName}></InputForm>
                <InputForm name="email" control={control} label="Email" type="email" error={errors.email}></InputForm>
                <InputForm name="username" control={control} label="Username" type="text" error={errors.username}></InputForm>
                <InputForm name="password" control={control} label="Password" type="password" error={errors.password}></InputForm>
                <button type="submit" className="btn btn-primary btn-login">Submit</button>
            </form>
        </div>
    )
}