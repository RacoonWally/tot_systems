import {
    FETCH_USER,
    CHOOSE_CHAT,
    FETCH_SPAM_DATA,
    FETCH_WORK_DATA,
    ADD_SPAM_DATA,
    ADD_WORK_DATA
} from "../actonTypes"
import {
    getList,
    addToList
} from "../service/"

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


export const fetchWorkMessageList = (currBtn) => dispatch => {
    const chatList = getList(currBtn);
    const chatArray = new Array();
    for (let key in chatList)
        chatArray.push(chatList[key]);
    dispatch({
        type: FETCH_WORK_DATA,
        payload: chatArray
    })
};


export const fetchSpamMessageList = (currBtn) => dispatch => {
    const chatList = getList(currBtn);
    const chatArray = new Array();
    for (let key in chatList)
        chatArray.push(chatList[key]);
    dispatch({
        type: FETCH_SPAM_DATA,
        payload: chatArray
    })
};

export const addDataToList = (username, message, type) => dispatch => {

    const newList = addToList(username, message, type);
    if (type === "work")
        dispatch({
            type: ADD_WORK_DATA,
            payload: newList
        });
    if (type === "spam")
        dispatch({
            type: ADD_SPAM_DATA,
            payload: newList
        });
};
