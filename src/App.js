import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './Components/Header/Header';
import Shopping from './Components/Shopping/Shopping';
import { init_shop } from './Actions/shop-actions';

const App = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.shopReducer.status);

    useEffect(() => {
        dispatch(init_shop());
    }, []);

    return (
        <>
            <Header />
            {status === 'SUCCESS' && <Shopping />}
            {status === 'LOADING' && <div>Loading</div>}
        </>
    );
};

export default App;
