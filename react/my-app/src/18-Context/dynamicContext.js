import React, { PureComponent } from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

class ThemedButton extends PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>change Theme</ThemedButton>;
}

class DynamicContext extends PureComponent {
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

export default DynamicContext;
