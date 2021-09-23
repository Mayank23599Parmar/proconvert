import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./Navbar"
import ImageOcr from './ImageOcr'
import ImageConvert from './ImageConvert';
import ReduceImage from './ReduceImage';
import Footer from "./Footer"
import Home from "./Home"
export default function App() {
  return (<>

    <Router>
    <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/" component={Home} />

          <Route path="/ocr">
            <ImageOcr />
          </Route>
          <Route path="/conveter">
            <ImageConvert />
          </Route>
          <Route path="/reducer">
            <ReduceImage />
          </Route>
        </Switch>

    </Router>

    <Footer/>
    </>
  );
}
