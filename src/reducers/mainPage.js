import {
    FETCH_USER,
    FETCH_WORK_DATA,
    FETCH_SPAM_DATA,
    ADD_SPAM_DATA,
    ADD_WORK_DATA
} from "../actonTypes"

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_USER: {
            const {username, password} = payload;
            return {
                username,
                password,
                isAuth: true
            }
        }
        case FETCH_WORK_DATA: {
            return {
                ...state,
                messages:payload
            }
        }
        case FETCH_SPAM_DATA: {
            return {
                ...state,
                messages:payload
            }
        }
        case ADD_WORK_DATA: {
            return {
                ...state,
                messages: payload
            }
        }
        case ADD_SPAM_DATA: {
            return {
                ...state,
                messages: payload
            }
        }
        default:
            return state
    }
}
