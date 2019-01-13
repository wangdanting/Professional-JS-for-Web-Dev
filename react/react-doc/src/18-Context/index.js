import React, { PureComponent, Fragment } from "react";
import DynamicContext from "./dynamicContext";

// const ThemeContext = React.createContext("light");

// class ThemedButton extends PureComponent {
//   static contextType = ThemeContext;

//   componentDidMount() {
//     const value = this.context;
//     console.log(value, "value"); // 'dark'
//   }
//   render() {
//     return <button>{this.context}</button>;
//   }
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

class ConText extends PureComponent {
  render() {
    return (
      // <ThemeContext.Provider value="dark">
      //   <Toolbar />
      // </ThemeContext.Provider>
      <DynamicContext />
    );
  }
}

export default ConText;
