import { INCREMENT, DECREMENT, SET_VALUE } from "./counter.actions";

const initState = 0;

export default (state = initState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case SET_VALUE:
            return action.payload;
        default:
            return state;
    }
}