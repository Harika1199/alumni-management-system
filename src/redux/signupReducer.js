const initialState={
    users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")) : []
};

const SignupReducer=(state=initialState, action)=>{
    switch(action.type){
        case "SAVE_USER":{
            return {
                ...state,
                users: [...state.users,action.payLoad]
            }
        }
        default:{
            return state
        }
    }
};

export default SignupReducer;