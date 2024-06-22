import { configureStore } from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.2.5/+esm"
import { reducer as userReducer, name as userActions } from "./slices/users";

const preloadedState = JSON.parse(localStorage.getItem('state') || "{}")

export const store = configureStore({
    reducer: {
        [userActions]: userReducer
    },
    preloadedState
});

const saveState = (state) => {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
}

store.subscribe(() => saveState(store.getState()))
