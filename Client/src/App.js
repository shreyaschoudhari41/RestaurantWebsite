import "./App.css";
import { About } from "./Components/AboutUs/About";
import { Content } from "./Components/Content/Content";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footers/Footer";
// import { Menue } from "./Components/Menue/Menue";
import { Menuelist } from "./Components/Menue/Menuelist";
import "./Components/Menue/Menue.css";
// import { Switch } from "react-router-dom";
// import { TotalAmount } from "./Components/Menue/TotalAmount";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
      </div>

      <Switch>
       
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <Content />
        </Route>

        <Route exact path="/menue">
          <>
            <div>
              <div className="outerdiv">
                <div className="innerdiv1">
                  <h1 className="head">Menue Card</h1>
                </div>
                <div className="innerdiv2">
                  <h4 className="list-group-item active">Dishes</h4>
                  <ul className="list-group eachrow">
                    <Menuelist />
                  </ul>
                </div>
              </div>
            </div>
          </>
        </Route>
      </Switch>

      <div>
        <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
