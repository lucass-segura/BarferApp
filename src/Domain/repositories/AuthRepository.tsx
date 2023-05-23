import { ResponseApiBarfer } from "../../Data/sources/remote/Models/ResponseApiBarfer";
import { User } from "../entity/User";

export interface AuthRepository {

    register(user: User): Promise <ResponseApiBarfer>

}