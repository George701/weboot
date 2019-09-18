import { REMOVE_ALERT, SET_ALERT } from './constants';
import uuid from 'uuid'

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alert, id }
    });
}