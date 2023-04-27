import "./App.css";
import Home from "./pages/Home";

import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Booking from "./pages/Booking";
import DollHouse from "./pages/DollHouse";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallary">
            <Gallary />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/dollHouse">
            <DollHouse />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
