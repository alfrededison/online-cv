import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {createStyles, Grid, Theme, withStyles, WithStyles} from "@material-ui/core";
import {AboutData, ProfileData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";
import {RecursivePartial} from "../interface";

type Data = {
  Profile: ProfileData
  About: AboutData
}

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const profileForm = (props: Props) => {
  const initValue: Data = {
    Profile: props.Profile,
    About: props.About,
  };

  const validators = (values: Data) => {
    const errors: RecursivePartial<Data> = {};
    if (
      !/^(http(s?):)([/.\w\s-])*\.(?:jpg|png)((\?.*)?$|$)/i.test(values.Profile.Avatar)
    ) {
      errors.Profile = {
        Avatar: 'Invalid image address'
      };
    }
    return errors;
  };

  const handler = (values: Data, formikHelpers: FormikHelpers<Data>) => {
    props.onSubmit(values);
    formikHelpers.setSubmitting(false);
  };

  const {classes} = props;

  return (
    <Formik
      initialValues={initValue}
      enableReinitialize
      validate={validators}
      onSubmit={handler}
    >
      {({submitForm, values, errors}) => (
        <Form onBlur={submitForm}>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <Field label="Name" name="Profile.Name" component={TextField}
                     fullWidth
                     required
                     validate={validateRequired}
              />
            </Grid>
            <Grid item xs={7}>
              <Field label="Title" name="Profile.Title" component={TextField}
                     fullWidth
                     required
                     validate={validateRequired}
              />
            </Grid>
            <Grid item xs={12}>
              <Field label="Avatar" name="Profile.Avatar" component={TextField}
                     fullWidth
                     required
                     validate={validateRequired}
              />
              {values.Profile.Avatar && !(errors.Profile && errors.Profile.Avatar) && (
                <img src={values.Profile.Avatar} className={classes.img} alt="User avatar"/>
              )}
            </Grid>
            <Grid item xs={12}>
              <Field label="DOB" name="Profile.DOB" component={TextField}
                     type="date"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     required
                     validate={validateRequired}
              />
            </Grid>
            <Grid item xs={12}>
              <Field label="About" name="About" component={TextField}
                     multiline rows="3"
                     fullWidth
                     required
                     validate={validateRequired}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
};

const styles = (theme: Theme) =>
  createStyles({
    ...themeStyles,
    img: {
      width: 400
    }
  });

export const ProfileForm = withStyles(styles)(profileForm);