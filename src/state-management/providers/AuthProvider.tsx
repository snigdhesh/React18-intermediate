import { ReactNode, useReducer } from "react"
import AuthContext from "../contexts/AuthContext";


interface LoginAction{
    type: 'LOGIN';
    username: string;
}

interface LogoutAction{
    type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction

const authReducer = (username: string,action: AuthAction):string => {
    switch(action.type){
        case 'LOGIN': return "Welcome " +action.username +" !"
        case 'LOGOUT': return '';
    }

    return username;
}

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