import React, {useState} from 'react'
import { ApiBarfer } from '../../../Data/sources/remote/api/ApiBarfer';

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
    
    try {
        const response = await ApiBarfer.post('/users/create', values);
        console.log('RESPONSE: ' + JSON.stringify(response));
    } catch (error) {
        console.log('ERROR: '+ error)
    }
 }

    return{
        ...values,
        onChange,
        register
    }
}


export default RegisterViewModel;