const initialState={
    isLoggedIn: false
};

const LoginReducer=(state=initialState, action)=>{
    switch(action.type){
        case "USER_LOGIN":{
            return {
                ...state,
                isLoggedIn: action.payLoad
            }
        }
        case "USER_LOGOUT":{
            return {
                ...state,
                isLoggedIn: action.payLoad
            }
        }
        default:{
            return state
        }
    }
};

export default LoginReducer;