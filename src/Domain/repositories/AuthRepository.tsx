import { ResponseApiBarfer } from "../../Data/sources/remote/Models/ResponseApiBarfer";
import { User } from "../entity/User";

export interface AuthRepository {


    login(email:string, password:string):Promise<ResponseApiBarfer>;
    register(user: User): Promise <ResponseApiBarfer>;
    

}