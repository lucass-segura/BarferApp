import React, {useState}from 'react'

export const HomeViewModel = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

const onChange = (propertie: string, value: string) => {
    setValues({...values, [propertie]: value});
}
return{
    ...values,
    onChange
}
}

export default HomeViewModel;