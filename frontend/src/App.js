import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingImage from "./components/LandingImage";
import NavBar from "./components/NavBar";
import WriteUp from "./components/WriteUp";
import YoutubeVideo from "./components/YoutubeVideo";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <BrowserRouter>
      <Header toggleNav={toggleNav} showNav={showNav} />
      {showNav && <NavBar />}
      <Switch>
        <Route path="/donate-to-make-a-change" component={Donation} />
        <Route path="/" exact>
          <LandingImage />
          <WriteUp />
          <YoutubeVideo />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
