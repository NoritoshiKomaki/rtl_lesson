import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import customCounterReducer from './features/customCounter/customCounterSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import ReduxAsync from './ReduxAsync';

describe('ReduxAsync Test', () => {
    let store: ToolkitStore;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                customCounter: customCounterReducer,
            },
        });
    });
    it('Should display value with 100 +  payload', async () => {
        render(
            <Provider store={store}>
                <ReduxAsync />
            </Provider>
        );
        await waitFor(
            async () => {
                await userEvent.click(screen.getByText('FetchDummy'));
            },
            { timeout: 3000 }
        );
        expect(await screen.findByTestId('count-value')).toHaveTextContent(
            '105'
        );
    });
});
