import React from "react";
import { User } from "../../../../Domain/entity/User";
import { RemoveUserLocalUseCase } from "../../../../Domain/useCases/userLocal/RemoveUserLocal";


const ProfileInfoViewModel = () => {

const removeSession = async() => {
    await RemoveUserLocalUseCase();
}

    return{
        removeSession
    }
}


export default ProfileInfoViewModel;