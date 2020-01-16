import * as React from 'react';
import {Field, FieldArray, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {Button, createStyles, Grid, IconButton, Theme, withStyles, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ContactsIcon from '@material-ui/icons/Contacts';

import {CertificateData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";

type Data = {
  Certificates: CertificateData[]
}

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const certificateForm = (props: Props) => {
  const initValue: Data = {
    Certificates: props.Certificates,
  };

  const initElementValue: CertificateData = {
    Title: '',
    School: '',
    Date: new Date(),
    Description: '',
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
            <FieldArray name="Certificates" render={arrayHelpers => (
              values.Certificates && values.Certificates.length > 0 ? (
                values.Certificates.map((certificate, index) => (
                  <Grid container item key={index} spacing={2}>
                    <Grid item xs={6}>
                      <Field label="Title" name={`Certificates.${index}.Title`}
                             fullWidth
                             component={TextField}
                             required
                             validate={validateRequired}/>
                    </Grid>
                    <Grid item xs={6}>
                      <Field label="School" name={`Certificates.${index}.School`}
                             fullWidth
                             component={TextField}
                             required
                             validate={validateRequired}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Field label="Date" name={`Certificates.${index}.Date`}
                             type="date"
                             component={TextField}
                             InputLabelProps={{
                               shrink: true,
                             }}
                             required
                             validate={validateRequired}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Field label="Description" name={`Certificates.${index}.Description`}
                             fullWidth
                             component={TextField}
                             required
                             validate={validateRequired}/>
                    </Grid>
                    <Grid item>
                      <IconButton aria-label="delete" onClick={() => arrayHelpers.remove(index)}>
                        <DeleteIcon/>
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton aria-label="add"
                                  onClick={() => arrayHelpers.insert(index + 1, initElementValue)}>
                        <AddCircleIcon/>
                      </IconButton>
                    </Grid>
                  </Grid>
                ))
              ) : (
                <Grid item>
                  <Button variant="contained" color="primary"
                          startIcon={<ContactsIcon/>}
                          onClick={() => arrayHelpers.push(initElementValue)}>
                    Add a certificate
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

export const CertificateForm = withStyles(styles)(certificateForm);