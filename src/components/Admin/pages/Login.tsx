// @flow
import * as React from 'react';
import axios from 'axios';
import {Button, createStyles, Grid, TextField, Theme, Typography, withStyles, WithStyles} from '@material-ui/core';
import {Link, RouteComponentProps} from 'react-router-dom';
import {trackPromise} from "react-promise-tracker";

const styles = (theme: Theme) =>
  createStyles({
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
  });

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {
}

type State = {
  email: string
  password: string
  errors?: { [key: string]: string }
};

class login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  //@ts-ignore
  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    trackPromise(
      axios.post('/login', loginData)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          this.props.history.push('/manage');
        })
        .catch(err => {
          this.setState({
            errors: err.response.data
          })
        })
    ).then();
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
          <Typography variant="h2">Login</Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField id="email" name="email" type="email" label="Email" fullWidth
                       value={this.state.email}
                       helperText={errors?.email} error={!!errors?.email}
                       className={classes.textField} onChange={this.handleChange}/>
            <TextField id="password" name="password" type="password" label="Password" fullWidth
                       value={this.state.password}
                       helperText={errors?.password} error={!!errors?.password}
                       className={classes.textField} onChange={this.handleChange}/>
            {errors?.general && (
              <Typography variant="body2" className={classes.customError}>{errors.general}</Typography>
            )}
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Login</Button>
            <br/>
            <small>
              don't have an account ? sign up <Link to="/manage/register">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm/>
      </Grid>
    );
  };
}

export const Login = withStyles(styles)(login);