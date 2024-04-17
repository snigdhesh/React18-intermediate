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

export default authReducer