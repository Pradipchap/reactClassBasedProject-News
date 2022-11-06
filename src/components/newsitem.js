import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="card" style={{ width: " 18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">By-{author}</li>
            <li className="list-group-item">{date}</li>
          </ul>
          <div className="card-body">
            <a href={newsUrl} target="_" className="btn btn-outline-info">
              Read News
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
