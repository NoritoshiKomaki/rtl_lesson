import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CustomCounterState } from '../../types';

const initialState: CustomCounterState = {
    mode: 0,
    value: 0,
    username: '',
};

const sleep = (msec: number) => {
    const start = Number(new Date());
    while (Number(new Date()) - start < msec);
};

export const fetchDummy = createAsyncThunk(
    'fetch/dummy',
    async (num: number) => {
        await sleep(2000);
        return num;
    }
);

export const fetchJSON = createAsyncThunk('fetch/api', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const { username } = res.data;
    return username;
});

export const customCounterSlice = createSlice({
    name: 'customCounter',
    initialState,
    reducers: {
        increment: (state) => {
            switch (state.mode) {
                case 0:
                    state.value += 1;
                    break;
                case 1:
                    state.value += 100;
                    break;
                case 2:
                    state.value += 10000;
                    break;
                default:
                    break;
            }
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            switch (state.mode) {
                case 0:
                    state.value += action.payload;
                    break;
                case 1:
                    state.value += 100 * action.payload;
                    break;
                case 2:
                    state.value += 10000 * action.payload;
                    break;
                default:
                    break;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDummy.fulfilled, (state, action) => {
            state.value = 100 + action.payload;
        });
        builder.addCase(fetchDummy.rejected, (state, action) => {
            state.value = 100 - Number(action.payload);
        });
        builder.addCase(fetchJSON.fulfilled, (state, action) => {
            state.username = action.payload;
        });
        builder.addCase(fetchJSON.rejected, (state, action) => {
            state.username = 'anonymous';
        });
    },
});

export const { increment, decrement, incrementByAmount } =
    customCounterSlice.actions;

export const selectCount = (state: any) => state.customCounter.value;
export const selectUsername = (state: any) => state.customCounter.username;

export default customCounterSlice.reducer;
