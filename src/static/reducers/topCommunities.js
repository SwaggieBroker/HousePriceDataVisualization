import {
    FETCH_TOP_COMMUNITIES,
    TOP_COMMUNITIES_RECEIVED
} from '../constants';

const initialState = {
    data: null,
    isFetching: false
};

export default function topCommunitiesReducer(state = initialState, action) {
    switch (action.type) {
        case TOP_COMMUNITIES_RECEIVED:
            return Object.assign({}, state, {
                data: action.payload.data,
                isFetching: false
            });

        case FETCH_TOP_COMMUNITIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state;
    }
}

