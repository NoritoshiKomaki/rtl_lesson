import { FC } from 'react';
import { Framework } from './types';

type Props = {
    frameworks?: Framework[];
};

const FrameworkList: FC<Props> = ({ frameworks }) => {
    if (!frameworks || !frameworks.length) {
        return <h1>No data !</h1>;
    }
    return (
        <div>
            <ul>
                {frameworks.map(({ id, item }) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FrameworkList;
