import { reducers as userReducers, name as userStateName, initialState as userInitialState } from "./slices/users";

const createStore = (reducers, initialState) => {
    let state = initialState;
    let listeners = [];
    
    return {
        getState: () => state,
        subscribe: (listener) => listeners.push(listener),
        dispatch: (action) => {
            state = reducers.reduce((state, reducer) => reducer(state, action), state)
            for (let listener of listeners){
                listener();
            }
        }
    }
}

const initialState = {
    [userStateName]: userInitialState
}

const reducers = [
    ...userReducers
]

export const store = createStore(reducers, initialState);
