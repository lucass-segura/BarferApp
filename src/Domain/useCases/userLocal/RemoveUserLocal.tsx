import { UserLocalRepositoryImpl } from "../../../Data/sources/remote/repositories/UserLocalRepository";
import { User } from "../../entity/User";

const {remove } = new UserLocalRepositoryImpl();


export const RemoveUserLocalUseCase = async () => {
    return await remove();
}