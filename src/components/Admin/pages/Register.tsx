// @flow
import * as React from 'react';
import {Button, createStyles, Grid, TextField, Theme, Typography, withStyles, WithStyles} from '@material-ui/core';
import {Link, RouteComponentProps} from 'react-router-dom';
import {connect, ConnectedProps} from "react-redux";
import {themeStyles} from "../utils/theme";
import {registerUser} from "../redux/actions/userActions";
import {AppState} from "../redux/store";

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface PropsFromRedux extends ConnectedProps<typeof connector> {
}

interface Props extends RouteComponentProps<any>, PropsFromStyles, PropsFromRedux {
}

type State = {
  email: string
  password: string
  confirmPassword: string
  resume: string
  errors?: { [key: string]: string }
};

class register extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      resume: '',
    }
  }

  componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      })
    }
  }

  //@ts-ignore
  handleSubmit = (event) => {
    event.preventDefault();
    const registerData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      resume: this.state.resume,
    };
    this.props.registerUser(registerData, this.props.history);
  };

  //@ts-ignore
  handleChange = (event) => {
    // @ts-ignore
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    const {classes} = this.props;
    const {errors} = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm/>
        <Grid item sm>
          <Typography variant="h2">Register</Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField id="email" name="email" type="email" label="Email" fullWidth
                       value={this.state.email}
                       helperText={errors?.email} error={!!errors?.email}
                       className={classes.textField} onChange={this.handleChange}/>
            <TextField id="password" name="password" type="password" label="Password" fullWidth
                       value={this.state.password}
                       helperText={errors?.password} error={!!errors?.password}
                       className={classes.textField} onChange={this.handleChange}/>
            <TextField id="confirmPassword" name="confirmPassword" type="password" label="Confirm Password" fullWidth
                       value={this.state.confirmPassword}
                       helperText={errors?.confirmPassword} error={!!errors?.confirmPassword}
                       className={classes.textField} onChange={this.handleChange}/>
            <TextField id="resume" name="resume" type="resume" label="Resume ID" fullWidth
                       value={this.state.resume}
                       helperText={errors?.resume} error={!!errors?.resume}
                       className={classes.textField} onChange={this.handleChange}/>
            {errors?.general && (
              <Typography variant="body2" className={classes.customError}>{errors.general}</Typography>
            )}
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Register</Button>
            <br/>
            <small>
              already have an account ? log in <Link to="/manage/login">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm/>
      </Grid>
    );
  };
}

const styles = (theme: Theme) =>
  createStyles({
    ...themeStyles
  });

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  registerUser
};

const connector = connect(
  mapStateToProps,
  mapActionsToProps
);

export const Register = connector(withStyles(styles)(register));