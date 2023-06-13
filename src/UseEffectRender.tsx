import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from './types';

const UseEffectRender = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchJSON = async () => {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/users/1'
        );
        return res.data;
    };

    useEffect(() => {
        const fetchUser = async () => {
            const user = await fetchJSON();
            setUser(user);
        };
        fetchUser();
    }, []);

    return (
        <div>
            {!user ? null : (
                <p>
                    I am {user.username} : {user.email}
                </p>
            )}
        </div>
    );
};

export default UseEffectRender;
