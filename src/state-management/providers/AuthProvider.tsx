import { ReactNode, useReducer } from "react"
import AuthContext from "../contexts/AuthContext";
import authReducer from "../reducers/authReducer";

interface Props {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const [username, authDispatch] = useReducer(authReducer, '');

    return (<>
        <AuthContext.Provider value={{ username, authDispatch }}>
            {children}
        </AuthContext.Provider>
    </>)

}

export default AuthProvider