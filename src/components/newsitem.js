import React from "react";

const Newsitem=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,20)}</h5>
            <p className="card-text">{description.slice(0,70)}</p>
            <p className="card-text"><small className="text-muted">By-{!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
          </div>

            
            
          
          <div className="btn">
            <a href={newsUrl} target="_" className="btn btn-sm btn-dark">
              Read News
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
