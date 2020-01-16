import * as React from 'react';
import {Field, FieldArray, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {Button, createStyles, Grid, IconButton, Theme, withStyles, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ContactsIcon from '@material-ui/icons/Contacts';

import {PrimaryContactData, SecondaryContactData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";
import {TextLinkInput} from "../fragments/TextLinkInput";

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
  const initValue: Data = {
    PrimaryContact: props.PrimaryContact,
    SecondaryContacts: props.SecondaryContacts
  };

  const initElementValue: SecondaryContactData = {
    Type: '',
    Value: {
      Text: '',
      Link: '',
    }
  };

  const validators = (values: Data) => {

  };

  const handler = (values: Data, formikHelpers: FormikHelpers<Data>) => {
    props.onSubmit(values);
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
          <Grid container spacing={4}>
            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <TextLinkInput name="PrimaryContact.Address"
                               label="Address"
                               required
                               validate={validateRequired}/>
              </Grid>
              <Grid item xs={12}>
                <TextLinkInput name="PrimaryContact.Email"
                               label="Email"
                               required
                               validate={validateRequired}/>
              </Grid>
              <Grid item xs={12}>
                <TextLinkInput name="PrimaryContact.Phone"
                               label="Phone"
                               required
                               validate={validateRequired}/>
              </Grid>
            </Grid>
            <FieldArray name="SecondaryContacts" render={arrayHelpers => (
              values.SecondaryContacts && values.SecondaryContacts.length > 0 ? (
                values.SecondaryContacts.map((contact, index) => (
                  <Grid container item key={index} spacing={2}>
                    <Grid item>
                      <Field label="Type" name={`SecondaryContacts.${index}.Type`}
                             component={TextField}
                             required
                             validate={validateRequired}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextLinkInput label={(contact.Type || '') + " Contact"}
                                     name={`SecondaryContacts.${index}.Value`}
                                     required
                                     validate={validateRequired}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton aria-label="delete" onClick={() => arrayHelpers.remove(index)}>
                        <DeleteIcon/>
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton aria-label="add"
                                  onClick={() => arrayHelpers.insert(index + 1, {...initElementValue})}>
                        <AddCircleIcon/>
                      </IconButton>
                    </Grid>
                  </Grid>
                ))
              ) : (
                <Grid item>
                  <Button variant="contained" color="primary"
                          startIcon={<ContactsIcon/>}
                          onClick={() => arrayHelpers.push({...initElementValue})}>
                    Add a contact
                  </Button>
                </Grid>
              )
            )}/>
          </Grid>
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