import React, {useState} from 'react'
import { ApiBarfer } from '../../../Data/sources/remote/api/ApiBarfer';
import { RegisterAuthUserCase } from '../../../Domain/useCases/auth/RegisterAuth';


export const RegisterViewModel = () => {
const [values, setValues] = useState({ 
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
    const {result, error} = await RegisterAuthUserCase(values);
    console.log('RESULT: ' + JSON.stringify(result));
    console.log('ERROR: ' + error);
 }

    return{
        ...values,
        onChange,
        register
    }
}


export default RegisterViewModel;