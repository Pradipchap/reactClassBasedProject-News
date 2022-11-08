import React, { Component } from "react";
import Navb from "./components/navbar";
import NewsComponent from "./components/newscomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specificnews from "./components/specificnews";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navb />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  noofitem={10}
                  genre={
                    "https://newsapi.org/v2/top-headlines?country=us&apiKey=381e2704b183499ba83f6a3eb5043cca&"
                  }
                />
              }
            />

            <Route exact path="/specificnews" element={<Specificnews />} />
          </Routes>
        </Router>

        {/* <NewsComponent noofitem={10} genre={'https://newsapi.org/v2/top-headlines?country=us&apiKey=381e2704b183499ba83f6a3eb5043cca&'}/> */}
      </>
    );
  }
}
// my api key 381e2704b183499ba83f6a3eb5043cca
