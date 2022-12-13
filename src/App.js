import React from "react";
import Navb from "./components/navbar";
import NewsComponent from "./components/newscomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


 const App =()=>  { 

  
  
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
              element={
                <NewsComponent
                 
                  key={"sports"}
                  genre={"sports"}

                  noofitem={12}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  
                  key={"business"}
                  genre={"business"}

                  noofitem={12}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent

                  key={"entertainment"}
                  genre={"entertainment"}

                  noofitem={12}
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <NewsComponent

                  key={"health"}
                  genre={"health"}

                  noofitem={12}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent

                  key="technology"
                  genre="technology"

                  noofitem={12}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent

                  key="science"
                  genre="science"

                  noofitem={12}
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
