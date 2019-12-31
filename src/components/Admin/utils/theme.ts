import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";
import {StyleRules} from "@material-ui/core";

export const themeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#00c853',
    },
  },
};

export const themeStyles: StyleRules = {
  form: {
    textAlign: 'center'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
};
