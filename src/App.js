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
              element={<NewsComponent noofitem={12} genre={"general"} />}
            />

            <Route
              exact
              path="/sports"
              
              element={<Specificnews key="sports" type="sports" />}
            />
            <Route
              exact
              path="/business"
              
              element={<Specificnews key="business" type={"business"} />}
            />
            <Route
              exact
              path="/entertainment"
              
              element={<Specificnews key="entertainment" type={"entertainment"} />}
            />
            
                        <Route
              exact
              path="/health"
              
              element={<Specificnews  key="health" type="health" />}
            />
            <Route
              exact
              path="/technology"
              
              element={<Specificnews key="technology" type="technology" />}
            />
            <Route
              exact
              path="/science"
              
              element={<Specificnews key="science" type="science" />}
            />
          </Routes>
        </Router>

        {/* <NewsComponent noofitem={10} genre={'https://newsapi.org/v2/top-headlines?country=us&apiKey=381e2704b183499ba83f6a3eb5043cca&'}/> */}
      </>
    );
  }
}
// my api key 381e2704b183499ba83f6a3eb5043cca
