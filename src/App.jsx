import './app.scss';
import Home from "./home/Home";
import "./form.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './components/Create';

///routing to my other pages - instead of having multiple different HTML pages, REACT keeps my main HTML page and injects the content I want into it, rather than me having to create new pages.
   const App = () => {
    return <Router>
            <Navbar/>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>

            <Switch>
              <Route path="/create">
                <Create/>
              </Route>
            </Switch>
          </Router>
    };

export default App;