import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import authentificator from './../../stores/user';

import './Greeting.css';

const user = {
    firstname: 'rayane',
    lastname: 'guemmoud',
    username: 'shaynlink',
    flag: 1 >> 1,
};

function Greeting() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    
        if (username === user.username && password) {
            authentificator.dispatch({
                type: 'authenticate/login',
                payload: user
            });
            navigate('/home', { replace: true });
        } else {
            window.createNotif('Wrong username or password', '#FF0000');
        };
    }

    return (
        <div>
            <div className="chiruLoginBackground" />
            <div className='chiruLoginContainer'>
                <div className="chiruLoginBox">
                    <div className="chiruLoginBoxContent">
                        <h1>Chiru チル - Dashboard</h1>

                        <form
                            className="chiruLoginBoxForm"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="chiruAdminUser">Admin user</label>
                                <input
                                    type="text"
                                    name="adminUser"
                                    id="chiruAdminUser"
                                    placeholder="Admin user"
                                    required
                                    autoCorrect="off"
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="chiruPassword">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="chiruPassword"
                                    placeholder="Password"
                                    required
                                    minLength="8"
                                    autoComplete="current-password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            
                            <input type="submit" value="Sign in" />
                        </form>

                        <div className="chiruLoginBoxFooter">
                            Chiru &copy; 2022 - All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Greeting;