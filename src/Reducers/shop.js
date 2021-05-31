import { SHOP_TYPES } from '../types';

const initialState = {
    status: 'LOADING',
    categoryId: [],
    categories: [],
    restaurants: {}
};

const shopReducer = (state = initialState, action) => {
    if (action.type === SHOP_TYPES.FETCHING_SHOP) {
        return initialState;
    }

    if (action.type === SHOP_TYPES.FETCHED) {
        return action.shop;
    }

    if (action.type === SHOP_TYPES.FETCH_ERROR) {
        return {
            status: 'ERROR',
            categoryId: [],
            categories: [],
            restaurants: {}
        };
    }

    return state;
};

export default shopReducer;
