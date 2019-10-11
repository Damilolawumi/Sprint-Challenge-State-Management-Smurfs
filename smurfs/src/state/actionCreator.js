import * as types from '../state/actionTypes';

export const saveSmurfData = (smurfs) => {
    return {
        type: types.LOAD_SMURF_DATA, 
        payload: smurfs
    }
}
