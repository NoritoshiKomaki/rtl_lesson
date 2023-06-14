import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount,
    fetchDummy,
    selectUsername,
    fetchJSON,
} from './features/customCounter/customCounterSlice';
import { AppDispatch } from './app/store';

const ReduxAsync = () => {
    const count = useSelector(selectCount);
    const username = useSelector(selectUsername);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <span data-testid="count-value">{count}</span>
            <button
                onClick={() => {
                    dispatch(fetchDummy(5));
                }}
            >
                FetchDummy
            </button>
            {username && <h1>{username}</h1>}
            <button
                onClick={() => {
                    dispatch(fetchJSON());
                }}
            >
                FetchJSON
            </button>
        </div>
    );
};

export default ReduxAsync;
