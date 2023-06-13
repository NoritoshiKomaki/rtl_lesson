import reducer, {
    fetchDummy,
} from '../src/features/customCounter/customCounterSlice';
import { CustomCounterState } from './types';

describe('extraReducers', () => {
    const initialState: CustomCounterState = {
        mode: 0,
        value: 0,
        username: '',
    };
    it('Should output 100 + payload with fulfilled', () => {
        const action = { type: fetchDummy.fulfilled.type, payload: 5 };
        const state = reducer(initialState, action);
        expect(state.value).toEqual(105);
    });
    it('Should output 100 - payload with rejected', () => {
        const action = { type: fetchDummy.rejected.type, payload: 5 };
        const state = reducer(initialState, action);
        expect(state.value).toEqual(95);
    });
});
