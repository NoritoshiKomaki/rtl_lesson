import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount,
    fetchDummy,
} from './features/customCounter/customCounterSlice';
import { AppDispatch } from './app/store';

const ReduxAsync = () => {
    const count = useSelector(selectCount);
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
        </div>
    );
};

export default ReduxAsync;
