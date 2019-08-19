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
import IndexOf from "./Pages/Array/indexOf"
import LastIndexOf from "./Pages/Array/lastIndexOf"
import Drop from "./Pages/Array/drop"
import DropRight from "./Pages/Array/dropRight"
import Fill from "./Pages/Array/fill"
import Head from "./Pages/Array/head"
import FlattenDeep from "./Pages/Array/flattenDeep"
import FlattenDepth from "./Pages/Array/flattenDepth"
import FromPairs from "./Pages/Array/fromPairs"
import Initial from "./Pages/Array/initial"
import Join from "./Pages/Array/join"
import Last from "./Pages/Array/last"
import Nth from "./Pages/Array/nth"
import Reverse from "./Pages/Array/reverse"
import SortedIndex from "./Pages/Array/sortedIndex"
import SortedIndexOf from "./Pages/Array/sortedIndexOf"
import SortedLastIndex from "./Pages/Array/sortedLastIndex"
import SortedLastIndexOf from "./Pages/Array/sortedLastIndexOf"
import Uniq from "./Pages/Array/uniq"
import SortedUniq from "./Pages/Array/sortedUniq"
import Tail from "./Pages/Array/tail"
import Take from "./Pages/Array/take"
import TakeRight from "./Pages/Array/takeRight"
import UpperFirst from "./Pages/String/upperFirst"
import LowerFirst from "./Pages/String/lowerFirst"
import Capitalize from "./Pages/String/capitalize"
import Deburr from "./Pages/String/deburr"
import Words from "./Pages/String/words"
import CamelCase from "./Pages/String/camelCase"
import EndsWith from "./Pages/String/endsWith"
import Escape from "./Pages/String/escape"
import EscapeRegExp from "./Pages/String/escapeRegExp"
import KebabCase from "./Pages/String/kebabCase"
import LowerCase from "./Pages/String/lowerCase"
import Repeat from "./Pages/String/repeat"
import Pad from "./Pages/String/pad"
import PadEnd from "./Pages/String/padEnd"
import PadStart from "./Pages/String/padStart"
import ParseInt from "./Pages/String/parseInt"
import Replace from "./Pages/String/replace"
import SnakeCase from "./Pages/String/snakeCase"
import StartCase from "./Pages/String/startCase"
import StartsWith from "./Pages/String/startsWith"
import ToLower from "./Pages/String/toLower"
import ToUpper from "./Pages/String/toUpper"
import Now from "./Pages/Date/now"
import InRange from "./Pages/Number/inRange"
import Random from "./Pages/Number/random"
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
              <li>
                <Link to="/indexOf/">indexOf</Link>
              </li>
              <li>
                <Link to="/lastIndexOf/">lastIndexOf</Link>
              </li>
              <li>
                <Link to="/drop/">drop</Link>
              </li>
              <li>
                <Link to="/dropRight/">dropRight</Link>
              </li>
              <li>
                <Link to="/fill/">fill</Link>
              </li>
              <li>
                <Link to="/head/">head</Link>
              </li>
              <li>
                <Link to="/flattenDeep/">flattenDeep</Link>
              </li>
              <li>
                <Link to="/flattenDepth/">flattenDepth</Link>
              </li>
              <li>
                <Link to="/fromPairs/">fromPairs</Link>
              </li>
              <li>
                <Link to="/initial/">initial</Link>
              </li>
              <li>
                <Link to="/join/">join</Link>
              </li>
              <li>
                <Link to="/last/">last</Link>
              </li>
              <li>
                <Link to="/nth/">nth</Link>
              </li>
              <li>
                <Link to="/reverse/">reverse</Link>
              </li>
              <li>
                <Link to="/sortedIndex/">sortedIndex</Link>
              </li>
              <li>
                <Link to="/sortedIndexOf/">sortedIndexOf</Link>
              </li>
              <li>
                <Link to="/sortedLastIndex/">sortedLastIndex</Link>
              </li>
              <li>
                <Link to="/sortedLastIndexOf/">sortedLastIndexOf</Link>
              </li>
              <li>
                <Link to="/uniq/">uniq</Link>
              </li>
              <li>
                <Link to="/sortedUniq/">sortedUniq</Link>
              </li>
              <li>
                <Link to="/tail/">tail</Link>
              </li>
              <li>
                <Link to="/take/">take</Link>
              </li>
              <li>
                <Link to="/takeRight/">takeRight</Link>
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
              <li>
                <Link to="/inRange/">inRange</Link>
              </li>
              <li>
                <Link to="/random/">random</Link>
              </li>
              <li className="title">Util</li>
              <li>
                <Link to="/times/">times</Link>
              </li>
              <li className="title">Object</li>
              <li>
                <Link to="/keys/">keys</Link>
              </li>
              <li className="title">String</li>
              <li>
                <Link to="/upperFirst/">upperFirst</Link>
              </li>
              <li>
                <Link to="/lowerFirst/">lowerFirst</Link>
              </li>
              <li>
                <Link to="/capitalize/">capitalize</Link>
              </li>
              <li>
                <Link to="/deburr/">deburr</Link>
              </li>
              <li>
                <Link to="/words/">words</Link>
              </li>
              <li>
                <Link to="/camelCase/">camelCase</Link>
              </li>
              <li>
                <Link to="/endsWith/">endsWith</Link>
              </li>
              <li>
                <Link to="/escape/">escape</Link>
              </li>
              <li>
                <Link to="/escapeRegExp/">escapeRegExp</Link>
              </li>
              <li>
                <Link to="/kebabCase/">kebabCase</Link>
              </li>
              <li>
                <Link to="/lowerCase/">lowerCase</Link>
              </li>
              <li>
                <Link to="/repeat/">repeat</Link>
              </li>
              <li>
                <Link to="/pad/">pad</Link>
              </li>
              <li>
                <Link to="/padEnd/">padEnd</Link>
              </li>
              <li>
                <Link to="/padStart/">padStart</Link>
              </li>
              <li>
                <Link to="/parseInt/">parseInt</Link>
              </li>
              <li>
                <Link to="/replace/">replace</Link>
              </li>
              <li>
                <Link to="/snakeCase/">snakeCase</Link>
              </li>
              <li>
                <Link to="/startCase/">startCase</Link>
              </li>
              <li>
                <Link to="/startsWith/">startsWith</Link>
              </li>
              <li>
                <Link to="/toLower/">toLower</Link>
              </li>
              <li>
                <Link to="/toUpper/">toUpper</Link>
              </li>
              <li>
                <Link to="/now/">now</Link>
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
            <Route path="/indexOf/" component={IndexOf} />
            <Route path="/lastIndexOf/" component={LastIndexOf} />
            <Route path="/drop/" component={Drop} />
            <Route path="/dropRight/" component={DropRight} />
            <Route path="/fill/" component={Fill} />
            <Route path="/head/" component={Head} />
            <Route path="/flattenDeep/" component={FlattenDeep} />
            <Route path="/flattenDepth/" component={FlattenDepth} />
            <Route path="/fromPairs/" component={FromPairs} />
            <Route path="/initial/" component={Initial} />
            <Route path="/join/" component={Join} />
            <Route path="/last/" component={Last} />
            <Route path="/nth/" component={Nth} />
            <Route path="/reverse/" component={Reverse} />
            <Route path="/sortedIndex/" component={SortedIndex} />
            <Route path="/sortedIndexOf/" component={SortedIndexOf} />
            <Route path="/sortedLastIndex/" component={SortedLastIndex} />
            <Route path="/sortedLastIndexOf/" component={SortedLastIndexOf} />
            <Route path="/uniq/" component={Uniq} />
            <Route path="/sortedUniq/" component={SortedUniq} />
            <Route path="/tail/" component={Tail} />
            <Route path="/take/" component={Take} />
            <Route path="/takeRight/" component={TakeRight} />
            <Route path="/upperFirst/" component={UpperFirst} />
            <Route path="/lowerFirst/" component={LowerFirst} />
            <Route path="/capitalize/" component={Capitalize} />
            <Route path="/deburr/" component={Deburr} />
            <Route path="/words/" component={Words} />
            <Route path="/camelCase/" component={CamelCase} />
            <Route path="/endsWith/" component={EndsWith} />
            <Route path="/escape/" component={Escape} />
            <Route path="/escapeRegExp/" component={EscapeRegExp} />
            <Route path="/kebabCase/" component={KebabCase} />
            <Route path="/lowerCase/" component={LowerCase} />
            <Route path="/repeat/" component={Repeat} />
            <Route path="/pad/" component={Pad} />
            <Route path="/padEnd/" component={PadEnd} />
            <Route path="/padStart/" component={PadStart} />
            <Route path="/parseInt/" component={ParseInt} />
            <Route path="/replace/" component={Replace} />
            <Route path="/snakeCase/" component={SnakeCase} />
            <Route path="/startCase/" component={StartCase} />
            <Route path="/startsWith/" component={StartsWith} />
            <Route path="/toLower/" component={ToLower} />
            <Route path="/toUpper/" component={ToUpper} />
            <Route path="/now/" component={Now} />
            <Route path="/inRange/" component={InRange} />
            <Route path="/random/" component={Random} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
