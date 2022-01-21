import { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Greeting from './Greeting/Greeting';
import Home from './Home/Home';

import authentificator from './../stores/user';

import './App.css';

function App() {
  useEffect(() => {
    authentificator.subscribe(() => {
        const state = authentificator.getState();

        if (state.isAuthenticated) {
          window.createNotif(`Welcome back ${state.user.firstname}`, '#12A40E');
        }
    });
  })

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Greeting />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
