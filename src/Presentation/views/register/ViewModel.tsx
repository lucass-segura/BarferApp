import React, {useState} from 'react'
import { ApiBarfer } from '../../../Data/sources/remote/api/ApiBarfer';
import { RegisterAuthUserCase } from '../../../Domain/useCases/auth/RegisterAuth';


export const RegisterViewModel = () => {


const [errorMessage, seterrorMessage] = useState('')
const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
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
    const response  = await RegisterAuthUserCase(values);
    console.log('RESULT: ' + JSON.stringify(response));
 }

    const isValidForm =(): boolean  => {
        if (values.name === '') {
            return false;
        }
        return true;
    }

    return{
        ...values,
        onChange,
        register
    }
}


export default RegisterViewModel;