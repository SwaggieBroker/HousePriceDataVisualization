import {
    FETCH_TOP_COMMUNITIES_SOLD,
    TOP_COMMUNITIES_SOLD_RECEIVED
} from '../constants';

const initialState = {
    data: null,
    isFetching: false
};

export default function topCommunitiesSoldReducer(state = initialState, action) {
    switch (action.type) {
        case TOP_COMMUNITIES_SOLD_RECEIVED:
            return Object.assign({}, state, {
                data: action.payload.data,
                isFetching: false
            });

        case FETCH_TOP_COMMUNITIES_SOLD:
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state;
    }
}

