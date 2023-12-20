import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderInput from './RenderInput';

afterEach(() => cleanup());

describe('Rendering', () => {
    it('Should render all the elements correctly', () => {
        render(<RenderInput />);
        expect(screen.getByRole('button')).toBeTruthy();
        expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
    });
});

describe('Input from onChange event', () => {
    it('Should update input value correctly', async () => {
        render(<RenderInput />);
        const inputValue: HTMLInputElement =
            screen.getByPlaceholderText('Enter');
        await waitFor(async () => await userEvent.type(inputValue, 'test'));
        expect(inputValue.value).toBe('test');
    });
});

describe('Console button conditionally triggerd', () => {
    it('Should not trigger output function', async () => {
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole} />);
        await userEvent.click(screen.getByRole('button'));
        expect(outputConsole).not.toHaveBeenCalled();
    });
    it('Should trigger output function', async () => {
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole} />);
        const inputValue = screen.getByPlaceholderText('Enter');
        await waitFor(async () => await userEvent.type(inputValue, 'test'));
        await userEvent.click(screen.getByRole('button'));
        expect(outputConsole).toHaveBeenCalledTimes(1);
    });
});
