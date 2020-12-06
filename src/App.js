import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SocketContextProvider from './contexts/socketContext';

import Home from './components/Home';
import ChatRoom from './components/ChatRoom';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <SocketContextProvider>
            <Route exact path='/' component={Home}></Route>
            <Route path='/chat' component={ChatRoom}></Route>
          </SocketContextProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
