import React, { useState,useEffect } from "react";
import Newsitem from "./newsitem";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";


const Newscomponent =(props)=> {

const [articles, setArticles] = useState()
const [page, setpage] = useState(1)
const [loading, setloading] = useState(true)
const [totalResults, settotalResults] = useState(0)
    // document.title = `Thamel News-${capitalize(props.genre)}`;
  
 const  capitalize = (s) => {
    return s.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  };
  

const updatestate = async () => {

    // setState({ loading: true });
    setloading(true)

   

    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.genre}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.noofitem}`;

    let fetchedData = await fetch(apiUrl);

    let parsedData = await fetchedData.json();

    
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

    
  };
useEffect(() => {
  updatestate();

  
}, )


 
  const fetchData = async () => {
    
    setpage(page+1)
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.genre}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.noofitem}`;

    let fetchedData = await fetch(apiUrl);
    let parsedData = await fetchedData.json();

    
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
  };

 
    return (
      <div className="container my-3 mx-3">
        

        <h1 className="text-center" style={{ margin: "55px" }}>
          Breaking News on {capitalize(props.genre)}
        </h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={
            articles.length <= totalResults ? (
              <Loading />
            ) : (
              <h1 className="text-muted text-center">
                All articles area finished
              </h1>
            )
          }
        >
          <div className="row">
            {loading === false
              ?articles.map((context) => {
                  return (
                    <div className="col-md-3 mb-3" key={context.url}>
                      <Newsitem
                        title={context.title ? context.title : ""}
                        description={
                          context.description ? context.description : ""
                        }
                        imageUrl={context.urlToImage}
                        newsUrl={context.url}
                        author={context.author}
                        date={context.publishedAt}
                        key={context.url}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </InfiniteScroll>


      </div>
    );
}
              
  
  Newscomponent.defaultProps = {
    noofitem: 12,
  };

export default Newscomponent;
