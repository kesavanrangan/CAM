import React from "react";
import Navbarcatalina from "./Component/Navbarcatalina";
import MainSection from "./Component/MainSection";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wind from "./Component/Wind";

class App extends React.Component {
  render() {
    let links = [
      { label1: "Window", link: "/window" },
      { label1: "Database", link: "/database" },
      { label1: "Linux", link: "/linux" },
      { label1: "Network", link: "/Network" },
      { label1: "Computer Operations", link: "/computer" }
    ];
    return (
      <BrowserRouter>
        <div>
          <Navbarcatalina links={links} />
          <Switch>
            <Route path="/" exact component={MainSection} />
            <Route path="/window">
              <Wind data="Window Access Management" />
            </Route>
            <Route path="/database">
              <Wind data="Database Access Management" />
            </Route>
            <Route path="/linux">
              <Wind data="Linux Access Management" />
            </Route>
            <Route path="/network">
              <Wind data="Network Access Management" />
            </Route>

            <Route path="/computer">
              <Wind data="Computer Operations Access Management" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
