import { render, screen } from '@testing-library/react';
import UseEffectRender from './UseEffectRender';

describe('UseEffect Rendering', () => {
    it('Should render only after async function resolved', async () => {
        render(<UseEffectRender />);
        expect(screen.queryByText(/I am/)).toBeNull();
        expect(await screen.findByText(/I am/)).toBeInTheDocument();
    });
});
