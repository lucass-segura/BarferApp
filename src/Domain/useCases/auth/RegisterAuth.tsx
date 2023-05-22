import { AuthRepositoryImpl } from "../../../Data/sources/remote/repositories/AuthRepository";
import { User } from "../../entity/User";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUserCase = async (user: User) => {
    return await register(user);
}