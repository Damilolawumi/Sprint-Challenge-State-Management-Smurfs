import * as types from '../state/actionTypes';

export const initialState = [];

export function smurfReducer (state = initialState, action) {
    switch (action.type) {
        case types.LOAD_SMURF_DATA:
            return [... action.payload]
        default:
            return state;
    }
}
