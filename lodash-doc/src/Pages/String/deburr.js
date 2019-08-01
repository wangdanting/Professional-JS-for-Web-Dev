import React from "react"
import deburr from "../../String/deburr"

const Demo = () => {
  return (
    <>
      <p className="code">
        转换字符串string中拉丁语-1补充字母和拉丁语扩张字母-A为基本的拉丁字母，并且去除组合变音标记
      </p>
      <p className="code">{`deburr('déjà vu')`}</p>
      <p className="comment">{`// => ${String(deburr("déjà vu"))}`}</p>
    </>
  )
}

export default Demo
