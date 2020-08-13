import {
    CHOOSE_CHAT
} from "../actonTypes"

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CHOOSE_CHAT: {
            return {
                typeChat: payload
            }
        }
        default:
            return state
    }
}
