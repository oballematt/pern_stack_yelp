import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './routes/Home' 
import UpdatePage from './routes/UpdatePage' 
import RestarauntDetail from './routes/RestarauntDetail' 
 
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaraunts/:id/update' component={UpdatePage} />
          <Route exact path='/restaraunts/:id' component={RestarauntDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
