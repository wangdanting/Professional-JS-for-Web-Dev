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
import Gte from "./Pages/Lang/gte"
import Lt from "./Pages/Lang/lt"
import Lte from "./Pages/Lang/lte"
import IsArray from "./Pages/Lang/isArray"
import IsBoolean from "./Pages/Lang/isBoolean"
import IsNumber from "./Pages/Lang/isNumber"
import IsNaN from "./Pages/Lang/isNaN"
import IsNil from "./Pages/Lang/isNil"
import IsNull from "./Pages/Lang/isNull"
import IsSafeInteger from "./Pages/Lang/isSafeInteger"
import IsInteger from "./Pages/Lang/isInteger"
import IsString from "./Pages/Lang/isString"
import IsUndefined from "./Pages/Lang/isUndefined"
import IsWeakMap from "./Pages/Lang/isWeakMap"
import IsWeakSet from "./Pages/Lang/isWeakSet"
import Clamp from "./Pages/Number/clamp"
import IsArguments from "./Pages/Lang/isArguments"
import Times from "./Pages/Util/times"
import Keys from "./Pages/Object/keys"
import ConformsTo from "./Pages/Lang/conformsTo"
import IsDate from "./Pages/Lang/isDate"
import IsPlainObject from "./Pages/Lang/isPlainObject"
import IsElement from "./Pages/Lang/isElement"
import IsEmpty from "./Pages/Lang/isEmpty"
import IsError from "./Pages/Lang/isError"
import IsFinite from "./Pages/Lang/isFinite"
import IsMap from "./Pages/Lang/isMap"
import IsRegExp from "./Pages/Lang/isRegExp"
import IsSet from "./Pages/Lang/isSet"
import ToArray from "./Pages/Lang/toArray"
import ToLength from "./Pages/Lang/toLength"
import ToSafeInteger from "./Pages/Lang/toSafeInteger"
import ToString from "./Pages/Lang/toString"
import Concat from "./Pages/Array/concat"
import Flatten from "./Pages/Array/flatten"
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
                <Link to="/slice/">slice</Link>
              </li>
              <li>
                <Link to="/chunk/">chunk</Link>
              </li>
              <li>
                <Link to="/concat/">concat</Link>
              </li>
              <li>
                <Link to="/flatten/">flatten</Link>
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
              <li>
                <Link to="/gte/">gte</Link>
              </li>
              <li>
                <Link to="/lt/">lt</Link>
              </li>
              <li>
                <Link to="/lte/">lte</Link>
              </li>
              <li>
                <Link to="/isArray/">isArray</Link>
              </li>
              <li>
                <Link to="/isBoolean/">isBoolean</Link>
              </li>
              <li>
                <Link to="/isNumber/">isNumber</Link>
              </li>
              <li>
                <Link to="/isNaN/">isNaN</Link>
              </li>
              <li>
                <Link to="/isNil/">isNil</Link>
              </li>
              <li>
                <Link to="/isNull/">isNull</Link>
              </li>
              <li>
                <Link to="/isSafeInteger/">isSafeInteger</Link>
              </li>
              <li>
                <Link to="/isInteger/">isInteger</Link>
              </li>
              <li>
                <Link to="/isString/">isString</Link>
              </li>
              <li>
                <Link to="/isUndefined/">isUndefined</Link>
              </li>
              <li>
                <Link to="/isWeakMap/">isWeakMap</Link>
              </li>
              <li>
                <Link to="/isWeakSet/">isWeakSet</Link>
              </li>
              <li>
                <Link to="/isArguments/">isArguments</Link>
              </li>
              <li>
                <Link to="/conformsTo/">conformsTo</Link>
              </li>
              <li>
                <Link to="/isDate/">isDate</Link>
              </li>
              <li>
                <Link to="/isElement/">isElement</Link>
              </li>
              <li>
                <Link to="/isPlainObject/">isPlainObject</Link>
              </li>
              <li>
                <Link to="/isEmpty/">isEmpty</Link>
              </li>
              <li>
                <Link to="/isError/">isError</Link>
              </li>
              <li>
                <Link to="/isFinite/">isFinite</Link>
              </li>
              <li>
                <Link to="/isMap/">isMap</Link>
              </li>
              <li>
                <Link to="/isRegExp/">isRegExp</Link>
              </li>
              <li>
                <Link to="/isSet/">isSet</Link>
              </li>
              <li>
                <Link to="/toArray/">toArray</Link>
              </li>
              <li>
                <Link to="/toLength/">toLength</Link>
              </li>
              <li>
                <Link to="/toSafeInteger/">toSafeInteger</Link>
              </li>
              <li>
                <Link to="/toString/">toString</Link>
              </li>
              <li className="title">Number</li>
              <li>
                <Link to="/clamp/">clamp</Link>
              </li>
              <li className="title">Util</li>
              <li>
                <Link to="/times/">times</Link>
              </li>
              <li className="title">Object</li>
              <li>
                <Link to="/keys/">keys</Link>
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
            <Route path="/gte/" component={Gte} />
            <Route path="/lt/" component={Lt} />
            <Route path="/lte/" component={Lte} />
            <Route path="/isArray/" component={IsArray} />
            <Route path="/isBoolean/" component={IsBoolean} />
            <Route path="/isNumber/" component={IsNumber} />
            <Route path="/isNaN/" component={IsNaN} />
            <Route path="/isNil/" component={IsNil} />
            <Route path="/isNull/" component={IsNull} />
            <Route path="/isSafeInteger/" component={IsSafeInteger} />
            <Route path="/isInteger/" component={IsInteger} />
            <Route path="/isString/" component={IsString} />
            <Route path="/isUndefined/" component={IsUndefined} />
            <Route path="/isWeakMap/" component={IsWeakMap} />
            <Route path="/isWeakSet/" component={IsWeakSet} />
            <Route path="/clamp/" component={Clamp} />
            <Route path="/isArguments/" component={IsArguments} />
            <Route path="/times/" component={Times} />
            <Route path="/keys/" component={Keys} />
            <Route path="/conformsTo/" component={ConformsTo} />
            <Route path="/isDate/" component={IsDate} />
            <Route path="/isPlainObject/" component={IsPlainObject} />
            <Route path="/isElement/" component={IsElement} />
            <Route path="/isEmpty/" component={IsEmpty} />
            <Route path="/isError/" component={IsError} />
            <Route path="/isFinite/" component={IsFinite} />
            <Route path="/isMap/" component={IsMap} />
            <Route path="/isRegExp/" component={IsRegExp} />
            <Route path="/isSet/" component={IsSet} />
            <Route path="/toArray/" component={ToArray} />
            <Route path="/toLength/" component={ToLength} />
            <Route path="/toSafeInteger/" component={ToSafeInteger} />
            <Route path="/toString/" component={ToString} />
            <Route path="/concat/" component={Concat} />
            <Route path="/flatten/" component={Flatten} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
