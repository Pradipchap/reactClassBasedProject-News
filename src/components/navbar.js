import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Navb extends Component {
  constructor(props){
    super();

  }
  
  render() {
    return (
<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Thamel News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="./sports" >Sports</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="./business">Business</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="./entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="./health">health</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link active" to='/technology'>technology</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link active" to='/science'>Science</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}

export default Navb