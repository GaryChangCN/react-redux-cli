const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

import { fetch } from '../../service';

export function increase(dispatch) {
    dispatch({
        type: INCREASE,
        payload: { value: 1 }
    });
}

export function decrease(dispatch) {
    dispatch({
        type: DECREASE,
        payload: { value: 1 }
    });
}

export function asyncG(dispatch) {
    fetch().then((value) => {
        dispatch({
            type: INCREASE,
            payload: { value }
        })
    });
}