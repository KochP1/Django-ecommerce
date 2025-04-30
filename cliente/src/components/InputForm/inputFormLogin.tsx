import { Controller, Control, FieldError } from "react-hook-form";
import { FormValuesLogIn } from "../models";
import './inputForm.css'



interface Props {
    name: keyof FormValuesLogIn
    control: Control<FormValuesLogIn>
    label: string
    type?: string
    error?: FieldError
}

export const InputFormLogin = ({name, control, label, type, error}: Props) => {
    return (
        <div className="input-form__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid": ""}`}></input>}/>
        </div>
    )
}
