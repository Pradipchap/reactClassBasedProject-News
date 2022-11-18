import React from "react";
import Navb from "./components/navbar";
import NewsComponent from "./components/newscomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specificnews from "./components/specificnews";

 const App =()=>  { 
   let apiKey=process.env.REACT_APP_NEWS_API
  
  
    return (
      <>
        <Router>
          <Navb />
          

          <Routes>
            <Route
              exact
              path="/"
              element={<NewsComponent noofitem={12} genre={"general"} apiKey={apiKey} />}
            />

            <Route
              exact
              path="/sports"
              element={
                <Specificnews
                 
                  key="sports"
                  type="sports"
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <Specificnews
                  
                  key="business"
                  type={"business"}
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <Specificnews

                  key="entertainment"
                  type={"entertainment"}
                  apikey={apiKey}
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <Specificnews

                  key="health"
                  type="health"
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <Specificnews

                  key="technology"
                  type="technology"
                  apikey={apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <Specificnews

                  key="science"
                  type="science"
                  apikey={apiKey}
                />
              }
            />
          </Routes>
        </Router>

        {/* <NewsComponent noofitem={10} genre={'https://newsapi.org/v2/top-headlines?country=us&apiKey=381e2704b183499ba83f6a3eb5043cca&'}/> */}
      </>
    );
  
}
export default App
// my api key 381e2704b183499ba83f6a3eb5043cca
