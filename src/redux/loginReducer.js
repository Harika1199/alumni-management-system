const initialState={
    isLoggedIn: localStorage.getItem("token") ? true:false,
    isRegistered: false,
    showLoginToast: false,
    showRegisterToast: false,
    loginData:localStorage.getItem("userLoginData")?localStorage.getItem("userLoginData"):{}
};

const LoginReducer=(state=initialState, action)=>{
    switch(action.type){
        case "USER_LOGIN":{
            return {
                ...state,
                isLoggedIn: action.payLoad
            }
        }
        case "SAVE_LOGIN_DATA":{
            return {
                ...state,
                loginData: action.payLoad
            }
        }
        case "USER_LOGIN_TOAST":{
            return {
                ...state,
                showLoginToast: action.payLoad
            }
        }
        case "USER_REGISTRATION":{
            return {
                ...state,
                isRegistered: action.payLoad
            }
        }
        case "USER_SIGNUP_TOAST":{
            return {
                ...state,
                showRegisterToast: action.payLoad
            }
        }
        default:{
            return state
        }
    }
};

export default LoginReducer;