import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Slice from "./Pages/Array/slice"
import Chunk from "./Pages/Array/chunk"
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
            </ul>
          </nav>

          <div className="right">
            <Route path="/" exact component={Index} />
            <Route path="/slice/" component={Slice} />
            <Route path="/chunk/" component={Chunk} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
