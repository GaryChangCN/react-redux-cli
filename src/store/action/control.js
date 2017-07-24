import {INCREASE, DECREASE} from '../actionTypes';

import { fetch } from '../../service/';

export function increase() {
    return (dispatch) => {
        dispatch({
            type: INCREASE,
            payload: { value: 1 }
        });
    }
}

export function decrease() {
    return (dispatch) => {
        dispatch({
            type: DECREASE,
            payload: { value: 1 }
        });
    }
}

export function asyncG() {
    return (dispatch) => {
        fetch().then((value) => {
            dispatch({
                type: INCREASE,
                payload: { value }
            })
        })
    }
}