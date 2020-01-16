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

  const initElementValue: SecondaryContactData = {
    Type: '',
    Value: {
      Text: '',
      Link: '',
    }
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
          <Grid container spacing={4}>
            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <Field label="DOB" name="DOB" component={TextField}
                       type="date"
                       InputLabelProps={{
                         shrink: true,
                       }}
                       required
                       validate={validateRequired}
                />
              </Grid>
              <Grid item xs={12}>
                <TextLinkInput name="Address" required validate={validateRequired}/>
              </Grid>
              <Grid item xs={12}>
                <TextLinkInput name="Email" required validate={validateRequired}/>
              </Grid>
              <Grid item xs={12}>
                <TextLinkInput name="Phone" required validate={validateRequired}/>
              </Grid>
            </Grid>
            <FieldArray name="Others" render={arrayHelpers => (
              values.Others && values.Others.length > 0 ? (
                values.Others.map((contact, index) => (
                  <Grid container item key={index} spacing={2}>
                    <Grid item>
                      <Field label="Type" name={`Others.${index}.Type`}
                             component={TextField}
                             required
                             validate={validateRequired}
                      />
                    </Grid>
                    <Grid item>
                      <TextLinkInput label={(contact.Type || '') + " Contact"}
                                     name={`Others.${index}.Value`}
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