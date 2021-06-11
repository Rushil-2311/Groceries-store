import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Onbording from './components/onbording/onbording';
import Welcome from "./components/welcome/welcome";
import Login from './components/login/Login';
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import Explore from './components/explore/Explore';
import Description from './components/description/Description';
import Location from './components/Location/Location';
import Cart from './components/cart/Cart';
function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Switch>
        <Route exact path="/welcome" >
      <Welcome />
      </Route>
          <Route path="/onbording">
        <Onbording />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Location">
        <Location
        />
      </Route>
      <Route path="/Description">
        <Description
        />
      </Route>
      <Route path="/Cart">
        <Cart
        />
      </Route>
      <Route path="/Explore">
        <Explore
        />
      </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
