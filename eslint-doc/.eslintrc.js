module.exports = {
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true //额外支持新的 ES6 全局变量
  },
  extends: ["eslint:recommended", "react-app"], // 启用一系列核心规则 //字符串数组：每个配置继承它前面的配置
  //指定你想要支持的 JavaScript 语言选项
  parserOptions: {
    //表示你想使用的额外的语言特性
    ecmaFeatures: {
      jsx: true //启用 JSX
    },
    ecmaVersion: 6, //启用 ES6 语法支持
    sourceType: "module" //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
  },
  plugins: ["react"], //ESLint 支持使用第三方插件
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
