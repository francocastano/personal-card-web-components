export const initialState = {
    selectedUser: null,
}

export const name = "users";

export const actions = [
    "USER_UPDATE",
    "USER_RESET"
]

function updateUserReducer(state, action) {
    if (action.type.localeCompare("USER_UPDATE") !== 0){
        return state
    }
    return {
        ...state,
        [name]: {
            selectedUser: action.payload
        }
    }
}

function resetUserReducer(state, action) {
    if (action.type.localeCompare("USER_RESET") !== 0){
        return state
    }
    return {
        ...state,
        [name]: {
            selectedUser: null
        }
    }
}

export const reducers = [
    updateUserReducer,
    resetUserReducer
];

export function updateUserAction(payload){
    return {
        type: "USER_UPDATE",
        payload: payload
    }
}

export function resetUserAction(payload){
    return {
        type: "USER_RESET",
        payload: payload
    }
}
