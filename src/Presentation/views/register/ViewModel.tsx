import React, {useState} from 'react'

export const RegisterViewModel = () => {
const [values, setValues] = useState({ 
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
    location: '',
    ubication: '',

 });

 const onChange = (property: string, value: string) => {
    setValues({
        ...values,
        [property]: value
    })
 }

 const register = () => { 
    console.log(JSON.stringify(values))  
 }

    return{
        ...values,
        onChange,
        register
    }
}


export default RegisterViewModel;