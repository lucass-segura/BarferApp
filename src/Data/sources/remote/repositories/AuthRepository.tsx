import { AxiosError } from "axios";
import { User } from "../../../../Domain/entity/User";
import { AuthRepository } from '../../../../Domain/repositories/AuthRepository';
import { ApiBarfer } from "../api/ApiBarfer";
import { ResponseApiBarfer } from '../Models/ResponseApiBarfer';


export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise <ResponseApiBarfer> {
        try {
            const response = await ApiBarfer.post<ResponseApiBarfer>('/users/create', user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiBarfer = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
}