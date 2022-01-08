import { TEST } from "../types/types";

export const store_test = {
    VALID_KEY: 0,
    UNVALID_KEY: 1,
    BACKSPACE: 2,
}

const initial_state = store_test.UNVALID_KEY;

const reducer = (state = initial_state, action) => {

    switch (action.type) {
        case TEST:
            console.log(action.payload);
            state = store_test.BACKSPACE;
            return state;

        default:
            return state;
    }
}

export default reducer;