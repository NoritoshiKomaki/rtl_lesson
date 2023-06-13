import { FC, useState } from 'react';

type Props = {
    outputConsole?: (inVal: string) => void;
};

const RenderInput: FC<Props> = ({ outputConsole }) => {
    const [input, setInput] = useState<string>('');

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const outputValue = () => {
        if (input && outputConsole) outputConsole(input);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter"
                onChange={updateValue}
                value={input}
            />
            <button onClick={outputValue}>Console</button>
        </div>
    );
};

export default RenderInput;
