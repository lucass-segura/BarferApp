import { AuthRepositoryImpl } from "../../../Data/sources/remote/repositories/AuthRepository";


const {login} = new AuthRepositoryImpl();

export const loginAuthUseCase = async (email : string , password : string) => {
    return await login(email, password);
} 