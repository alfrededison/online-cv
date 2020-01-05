import * as React from 'react';
import {Field, Form, Formik} from 'formik';
import {TextField,} from 'formik-material-ui';
import {AboutData, ProfileData} from "../../../interface";

type Values = {
  Name: string
  Title: string
  Avatar: string
  About: string
}

type Data = {
  Profile: ProfileData
  About: AboutData
}

type Props = Data & {
  onSubmit: (values: Data) => void
}

export const ProfileForm = (props: Props) => {
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

  const validateRequired = (value: any) => {
    if (!value) {
      return 'This field is required';
    }
  };

  const handler = (values: Values) => {
    const {Name, Title, Avatar, About} = values;
    const returnValues: Data = {
      Profile: {Avatar, Name, Title},
      About: About.split(/\r\n|\r|\n/g)
    };
    props.onSubmit(returnValues);
  };

  return (
    <Formik
      initialValues={initValue}
      enableReinitialize
      validate={validators}
      onSubmit={handler}
      render={({submitForm}) => (
        <Form onBlur={submitForm}>
          <Field label="Name" name="Name" component={TextField}
            validate={validateRequired}
          />
          <br/>
          <Field label="Title" name="Title" component={TextField}
            validate={validateRequired}
          />
          <br/>
          <Field label="Avatar" name="Avatar" component={TextField}
            validate={validateRequired}
            fullWidth
          />
          <br/>
          <Field label="About" name="About" component={TextField}
            multiline rows="3"
            fullWidth
            validate={validateRequired}
          />
        </Form>
      )}
    />
  )
};
