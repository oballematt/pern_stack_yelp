import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from './routes/Home' 
import UpdatePage from './routes/UpdatePage' 
import RestaurantDetail from './routes/RestaurantDetail'
import Login from './routes/Login' 
import Register from './routes/Register'
import Profile from './routes/Profile'

function App() {

const [isAuthenticated, setIsAuthenticated] = useState(false)

const setAuth = (boolean) => {
  setIsAuthenticated(boolean)
}

  return (
    <div className="container">
      <Router>
          <Switch>
          <Route exact path='/login' 
            render={props =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to='/profile' />
              )
          }
          />
           <Route exact path='/register' 
            render={props =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth} />
              ) : (
                <Redirect to='/login' />
              )
          }
          />
           <Route exact path='/profile' 
            render={props =>
              isAuthenticated ? (
                <Profile {...props} setAuth={setAuth} />
              ) : (
                <Redirect to='/login' />
              )
          }
          />
          <Route exact path='/'component={Home} />
          <Route exact path='/restaraunts/:id/update' component={UpdatePage} />
          <Route exact path='/restaraunts/:id' component={RestaurantDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
