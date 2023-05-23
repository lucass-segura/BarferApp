import React, {useState} from 'react'
import { ApiBarfer } from '../../../Data/sources/remote/api/ApiBarfer';
import { RegisterAuthUserCase } from '../../../Domain/useCases/auth/RegisterAuth';


export const RegisterViewModel = () => {


const [errorMessage, setErrorMessage] = useState('')
const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    direction: '',

 });

 const onChange = (property: string, value: string) => {
    setValues({
        ...values,
        [property]: value
    })
 }

 const register = async () => { 
    if (isValidForm()){
    const response  = await RegisterAuthUserCase(values);
    console.log('RESULT: ' + JSON.stringify(response));
        }
    }

    const isValidForm =(): boolean  => {
        if (values.name === '') {
            setErrorMessage('Ingresa un nombre.')
            return false;
        }
        if (values.email === '') {
            setErrorMessage('Ingresa un email valido.')
            return false;
        }
        if (values.password === '') {
            setErrorMessage('Ingresa una contraseña valida.')
            return false;
        }
        if (values.confirmPassword !== values.password) {
            setErrorMessage('Las contraseñas no coinciden.')
            return false;
        }
        if (values.phone === '') {
            setErrorMessage('Ingresa un número de telefono.')
            return false;
        }
        if (values.direction === '') {
            setErrorMessage('Ingresauna dirección.')
            return false;
        }
        return true;
    }

    return{
        ...values,
        onChange,
        register,
        errorMessage
    }
}


export default RegisterViewModel;