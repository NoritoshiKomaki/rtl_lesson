import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import customCounterReducer from './features/customCounter/customCounterSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import ReduxAsync from './ReduxAsync';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(
        'https://jsonplaceholder.typicode.com/users/1',
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }));
        }
    )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Redux Async API Mocking', () => {
    let store: ToolkitStore;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                customCounter: customCounterReducer,
            },
        });
    });
    it('[Fetch success] Should display username in h3 tag', async () => {
        render(
            <Provider store={store}>
                <ReduxAsync />
            </Provider>
        );
        expect(screen.queryByRole('heading')).toBeNull();
        await waitFor(
            async () => await userEvent.click(screen.getByText('FetchJSON'))
        );
        expect(await screen.findByText('Bred dummy')).toBeInTheDocument();
    });
    it('[Fetch failed] Should display anonymous in h3 tag', async () => {
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users/1',
                (req, res, ctx) => res(ctx.status(404))
            )
        );
        render(
            <Provider store={store}>
                <ReduxAsync />
            </Provider>
        );
        expect(screen.queryByRole('heading')).toBeNull();
        await waitFor(
            async () => await userEvent.click(screen.getByText('FetchJSON'))
        );
        expect(await screen.findByText('anonymous')).toBeInTheDocument();
    });
});
