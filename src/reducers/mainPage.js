import {
    FETCH_USER
} from "../actonTypes"

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_USER: {
            console.log("payload");
            console.log(payload);
            const {username, password} = payload;
            return {
                username,
                password,
                isAuth: true
            }
        }
        default:
            return state
    }
}
