import { TEST } from "../types/types";

export const turnRotor = (payload) => {
    return {
        type: TEST,
        payload: payload
    }
}