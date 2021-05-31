import store from '../store';
import axios from 'axios';
import { SHOP_TYPES } from '../types';
import { getRestaurantStatus } from '../helpers/RestaurantStatus';

export const init_shop = () => {
    const shop = {
        status: '',
        categoryId: [],
        categories: [],
        restaurants: {}
    };
    store.dispatch({
        type: SHOP_TYPES.FETCHING_SHOP,
        status: 'LOADING'
    });
    return (dispatch) => {
        axios
            .get('http://localhost:5000/categories')
            .then((res) => res.data)
            .then((categories) => {
                const apiArr = [];
                categories.categories.forEach((categoryObj) => {
                    apiArr.push(
                        axios.get(`http://localhost:5000/stores?category=${categoryObj.name}`)
                    );
                });

                axios.all(apiArr).then(
                    axios.spread((...response) => {
                        apiArr.forEach((item, index) => {
                            let res = getRestaurantStatus(
                                categories.categories[index],
                                response[index].data.stores
                            );
                            shop.categories.push(res.categoryObj);
                            shop.restaurants[res.categoryId] = res.restaurantsArr;
                            shop.categoryId.push(res.categoryId);
                            shop.status = 'SUCCESS';
                        });
                        dispatch({ type: SHOP_TYPES.FETCHED, shop: shop });
                    })
                );
            })
            .catch((error) => dispatch({ type: SHOP_TYPES.FETCH_ERROR, status: 'ERROR' }));
    };
};
