import { UserLocalRepositoryImpl } from "../../../Data/sources/remote/repositories/UserLocalRepository";
import { User } from "../../entity/User";

const {getUser } = new UserLocalRepositoryImpl();


export const GetUserUseCase = async () => {
    return await getUser();
}