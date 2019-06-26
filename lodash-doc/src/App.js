import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Slice from "./Pages/Array/slice"
import Chunk from "./Pages/Array/chunk"
import IsObject from "./Pages/Lang/isObject"
import IsLength from "./Pages/Lang/isLength"
import IsFunction from "./Pages/Lang/isFunction"
import IsArrayLike from "./Pages/Lang/isArrayLike"
import IsObjectLike from "./Pages/Lang/isObjectLike"
import Eq from "./Pages/Lang/eq"
import IsSymbol from "./Pages/Lang/isSymbol"
import ToNumber from "./Pages/Lang/toNumber"
import ToFinite from "./Pages/Lang/toFinite"
import ToInteger from "./Pages/Lang/toInteger"
import CastArray from "./Pages/Lang/castArray"
import Gt from "./Pages/Lang/gt"
const Index = () => <div>欢迎使用来到学习lodash世界</div>

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div className="page">
          <nav className="left">
            <ul className="nav">
              <li className="title">Array</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/slice/">slice</Link>
              </li>
              <li>
                <Link to="/chunk/">chunk</Link>
              </li>
              <li className="title">Lang</li>
              <li>
                <Link to="/isObject/">isObject</Link>
              </li>
              <li>
                <Link to="/isLength/">isLength</Link>
              </li>
              <li>
                <Link to="/isFunction/">isFunction</Link>
              </li>
              <li>
                <Link to="/isArrayLike/">isArrayLike</Link>
              </li>
              <li>
                <Link to="/eq/">eq</Link>
              </li>
              <li>
                <Link to="/isObjectLike/">isObjectLike</Link>
              </li>
              <li>
                <Link to="/isSymbol/">isSymbol</Link>
              </li>
              <li>
                <Link to="/toNumber/">toNumber</Link>
              </li>
              <li>
                <Link to="/toFinite/">toFinite</Link>
              </li>
              <li>
                <Link to="/toInteger/">toInteger</Link>
              </li>
              <li>
                <Link to="/castArray/">castArray</Link>
              </li>
              <li>
                <Link to="/gt/">gt</Link>
              </li>
            </ul>
          </nav>

          <div className="right">
            <Route path="/" exact component={Index} />
            <Route path="/slice/" component={Slice} />
            <Route path="/chunk/" component={Chunk} />
            <Route path="/isObject/" component={IsObject} />
            <Route path="/isLength/" component={IsLength} />
            <Route path="/isFunction/" component={IsFunction} />
            <Route path="/isArrayLike/" component={IsArrayLike} />
            <Route path="/eq/" component={Eq} />
            <Route path="/isObjectLike/" component={IsObjectLike} />
            <Route path="/isSymbol/" component={IsSymbol} />
            <Route path="/toNumber/" component={ToNumber} />
            <Route path="/toFinite/" component={ToFinite} />
            <Route path="/toInteger/" component={ToInteger} />
            <Route path="/castArray/" component={CastArray} />
            <Route path="/gt/" component={Gt} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
