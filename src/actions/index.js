export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_MEMORY = "SET_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const operationChange = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const setMemory = () => {
    return({type:SET_MEMORY})
}

export const recallMemory = () => {
    return({type:RECALL_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}