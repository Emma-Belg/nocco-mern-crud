import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateProducts from "./components/CreateProducts";
import EditProduct from "./components/EditProduct";
import Products from "./components/Products";
import Limon from "./components/products/limon";
import logo from "./assets/logos/nocco-white-transparent-200.png"
//import 'nocco-white-transparent-200' from "./assets/nocco-white-transparent-200.png";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com"/>
                    </a>
                    <Link to="/" className="navbar-brand">Nocco App</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Products</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <Route path="/" exact component={Products} />
                <Route path="/edit/:id" component={EditProduct} />
                <Route path="/create" component={CreateProducts} />

                <Route path="/limon" exact component={Limon} />
            </div>
        </Router>

    );
  }
}

export default App;
