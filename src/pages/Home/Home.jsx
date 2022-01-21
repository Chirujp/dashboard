import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import authentificator from './../../stores/user';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const state = authentificator.getState();

        if (!state.isAuthenticated) {
            window.createNotif('Your are not connected', '#FF0000');
            navigate('/', { replace: true });
        };
    });

    return <></>;
};

export default Home;