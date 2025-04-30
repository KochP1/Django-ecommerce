import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputForm } from "../../components/InputForm/inputForm";
import { FormValues, schema } from "../../components/models";
import './register.css'

export const RegisterPage = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
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