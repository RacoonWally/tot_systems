import workMessageList from "./mockDataWork"
import spamMessageList from "./mockDataSpam"

export const getList = (type) => {
    switch (type) {
        case "work": {
            return workMessageList
        }
        case "spam": {
            return spamMessageList
        }
        default: {
            return;
        }
    }

};

export const addToList = (username, message, type) => {
    switch (type) {
        case "work": {
            workMessageList.unshift({username, message});
            return workMessageList
        }
        case "spam": {
            spamMessageList.unshift({username, message});
            return spamMessageList
        }
        default: {

        }
    }
};


