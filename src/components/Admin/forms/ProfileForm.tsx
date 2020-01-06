import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {AboutData, ProfileData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";

type Values = ProfileData & {
  About: string
}

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
  const initValue: Values = {
    About: props.About.join("\n"),
    ...props.Profile
  };

  const validators = (values: Values) => {
    const errors: Partial<Values> = {};
    if (
      !/^(http(s?):)([/.\w\s-])*\.(?:jpg|png)$/i.test(values.Avatar)
    ) {
      errors.Avatar = 'Invalid image address';
    }
    return errors;
  };

  const handler = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    const {About, ...profile} = values;
    const returnValues: Data = {
      Profile: {...profile},
      About: About.split(/\r\n|\r|\n/g)
    };
    props.onSubmit(returnValues);
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
          <Field label="Name" name="Name" component={TextField}
                 validate={validateRequired}
          />
          <br/>
          <Field label="Title" name="Title" component={TextField}
                 fullWidth
                 validate={validateRequired}
          />
          <br/>
          <Field label="Avatar" name="Avatar" component={TextField}
                 fullWidth
                 validate={validateRequired}
          />
          {values.Avatar && !errors.Avatar && <img src={values.Avatar} className={classes.img} alt="User avatar"/>}
          <br/>
          <Field label="About" name="About" component={TextField}
                 multiline rows="3"
                 fullWidth
                 validate={validateRequired}
          />
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