import { User } from "../../../../Domain/entity/User";
import { AuthRepository } from '../../../../Domain/repositories/AuthRepository';
import { ApiBarfer } from "../api/ApiBarfer";
import { ResponseApiBarfer } from "../Models/ResponseApiBarfer"


export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User) {
        try {
            const response = await ApiBarfer.post<ResponseApiBarfer>('/users/create', user);
            return Promise.resolve({error: undefined, result: response.data});
        } catch (error) {
            let e = (error as Error).message;
            console.log('ERROR: ' + e);
            return Promise.resolve({ error: e, result: undefined})
        }
    }
}