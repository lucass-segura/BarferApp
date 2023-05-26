import { UserLocalRepositoryImpl } from "../../../Data/sources/remote/repositories/UserLocalRepository";
import { User } from "../../entity/User";

const {save } = new UserLocalRepositoryImpl();


export const SaveUserLocalUseCase = async (user : User) => {
    return await save(user);
}