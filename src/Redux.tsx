import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount,
    increment,
    decrement,
    incrementByAmount,
} from './features/customCounter/customCounterSlice';
import { useState } from 'react';

const Redux = () => {
    const [number, setNumber] = useState<number>(0);
    const counter = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Redux Integration Test</h3>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span data-testid="count-value">{counter}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(number | 0))}>
                    IncrementByAmount
                </button>
                <input
                    type="text"
                    placeholder="Enter"
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Redux;
