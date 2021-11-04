import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles.css'
import { Home, Dashboard, SignIn } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title = {'Fictional Characters'}/>
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
