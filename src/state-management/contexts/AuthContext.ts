import React, { Dispatch } from "react";
import { AuthAction } from "../providers/AuthProvider";

interface AuthContextType {
    username: string;
    authDispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export default AuthContext