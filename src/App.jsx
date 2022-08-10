import './app.scss';
import Home from "./home/Home";
import "./form.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Watch from './components/Watch';
import DiaryList from './components/diary/diaryItem/Diary';
//import Diary from './components/diary';

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

            <Switch>
              <Route path="/diary">
                <DiaryList/>
              </Route>
            </Switch>

            <Switch>
              <Route path="/watch">
                <Watch/>
              </Route>
            </Switch>

          </Router>
    };

export default App;