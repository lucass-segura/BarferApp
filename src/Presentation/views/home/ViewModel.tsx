import React, { useState, useEffect } from 'react';
import { loginAuthUseCase } from '../../../Domain/useCases/auth/loginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/userUserLocal';
export const HomeViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const {user, getUserSession} = useUserLocal();


    const onChange = (propertie: string, value: string) => {
        setValues({ ...values, [propertie]: value });
    }

    const login = async () => {
        if (isValidForm()) {
            const response = await loginAuthUseCase(values.email, values.password);
            console.log('RESPONSE' + JSON.stringify(response));
            if(!response.success)
            {
                setErrorMessage(response.message);
            }
            else{
                await SaveUserLocalUseCase(response.data);
                getUserSession();

            }
        }

    }


    const isValidForm = (): Boolean => {

        if (values.email == '') {
            setErrorMessage('Ingresa el correo electronico');
            return false;
        }

        if (values.password = '') {
            setErrorMessage('Ingresa una password');
            return false;
        }

        return true;
    }

    return {
        ...values,
        user,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel;