import './Home.css';

function Home() {
    return (
        <div>
            <div className="chiruLoginBackground" />
            <div className='chiruLoginContainer'>
                <div className="chiruLoginBox">
                    <div className="chiruLoginBoxContent">
                        <h1>Chiru チル - Dashboard</h1>

                        <form className="chiruLoginBoxForm">
                            <div>
                                <label htmlFor="chiruAdminUser">Admin user</label>
                                <input
                                    type="text"
                                    name="adminUser"
                                    id="chiruAdminUser"
                                    placeholder="Admin user"
                                    required
                                    autocorrect="off"
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
                                    minlength="8"
                                    autocomplete="current-password"
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

export default Home;