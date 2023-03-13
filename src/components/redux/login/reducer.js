import { LOGIN } from "./actions";
import { LOGOUT } from "./actions";

const initialState = {
    loading: false,
    token: "ssss",
    isAuth: false,
    error: false
};

export default function loginReducer(state=initialState, action){
    switch (action.type){
        case LOGIN:
            if (action.payload.email=="a@g.c" && action.payload.pass=='123')
                return ({
                    ...state,
                    isAuth: true,
                    loading: false,
                    error: false
                });
            else
                return ({
                    ...state,
                    isAuth: false,
                    loading: false,
                    error: false
                });
        case LOGOUT:
            return({
                ...state,
                token: "",
                isAuth: false,
                loading: false,
                error: false
            });
        default:
            return (state);
    }
}