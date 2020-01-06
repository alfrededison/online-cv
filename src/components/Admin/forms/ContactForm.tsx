import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {PrimaryContactData, SecondaryContactData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";
import {TextLinkInput} from "../fragments/TextLinkInput";

type Values = PrimaryContactData & {
  Others: SecondaryContactData[]
}

type Data = {
  PrimaryContact: PrimaryContactData
  SecondaryContacts: SecondaryContactData[]
}

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const contactForm = (props: Props) => {
  const initValue: Values = {
    ...props.PrimaryContact,
    Others: props.SecondaryContacts
  };

  const validators = (values: Values) => {

  };

  const handler = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    const {Others, ...primary} = values;
    const returnValues: Data = {
      PrimaryContact: {...primary},
      SecondaryContacts: Others,
    };
    props.onSubmit(returnValues);
    formikHelpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initValue}
      enableReinitialize
      validate={validators}
      onSubmit={handler}
    >
      {({submitForm, values, errors}) => (
        <Form onBlur={submitForm}>
          <Field label="DOB" name="DOB" component={TextField}
                 type="date"
                 InputLabelProps={{
                   shrink: true,
                 }}
                 validate={validateRequired}
          />
          <br/>
          <TextLinkInput name="Address" validate={validateRequired}/>
          <TextLinkInput name="Email" validate={validateRequired}/>
          <TextLinkInput name="Phone" validate={validateRequired}/>
        </Form>
      )}
    </Formik>
  )
};

const styles = (theme: Theme) =>
  createStyles({
    ...themeStyles
  });

export const ContactForm = withStyles(styles)(contactForm);