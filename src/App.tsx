import './App.css';
import RenderInput from './RenderInput';
import FrameworkList from './FrameworkList';
import { Framework } from './types';
import UseEffectRender from './UseEffectRender';
import MockServer from './MockServer';
import Redux from './Redux';
import ReduxAsync from './ReduxAsync';
import CustomHooks from './CustomHooks';

const data: Framework[] = [
    { id: 1, item: 'React' },
    { id: 2, item: 'Angular' },
    { id: 3, item: 'Vue' },
];

const App = () => {
    const output = (text: string) => {
        console.log(text);
    };

    return (
        <div className="App">
            <header className="App-header">
                <RenderInput outputConsole={output} />
                <FrameworkList frameworks={data} />
                <UseEffectRender />
                <MockServer />
                <Redux />
                <ReduxAsync />
                <CustomHooks />
            </header>
        </div>
    );
};

export default App;
