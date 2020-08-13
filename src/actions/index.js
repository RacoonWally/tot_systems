import {
    FETCH_USER,
    CHOOSE_CHAT
} from "../actonTypes"

export const fetchAuthLocal = (data) => dispatch => {

    dispatch({
        type: FETCH_USER,
        payload: data
    })
};

export const chooseChat = (payload) => dispatch => {
    dispatch({
        type: CHOOSE_CHAT,
        payload
    })
};
