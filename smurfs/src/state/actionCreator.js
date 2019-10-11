import * as types from '../state/actionTypes';
import axios from 'axios';

export const saveSmurfData = (smurfs) => {
    return {
        type: types.LOAD_SMURF_DATA, 
        payload: smurfs
    }
}
