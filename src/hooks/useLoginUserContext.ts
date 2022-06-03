import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider";

export const useLoginUserContext=():LoginUserContextType=>{
    return useContext(LoginUserContext)
}