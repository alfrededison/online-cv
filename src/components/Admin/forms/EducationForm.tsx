import * as React from 'react';
import {Field, FieldArray, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {Button, createStyles, Grid, IconButton, Theme, withStyles, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ContactsIcon from '@material-ui/icons/Contacts';

import {EducationData, LanguageData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";

type Data = {
  Education: EducationData
  Languages: LanguageData[]
}

type Values = Data;

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const educationForm = (props: Props) => {
  const initValue: Values = {
    Education: props.Education,
    Languages: props.Languages,
  };

  const initElementValue: LanguageData = {
    Language: '',
    Level: '',
  };

  const validators = (values: Values) => {

  };

  const handler = (values: Values, formikHelpers: FormikHelpers<Values>) => {
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
              <Grid item xs={6}>
                <Field label="Title" name="Education.Title"
                       fullWidth
                       component={TextField}
                       required
                       validate={validateRequired}/>
              </Grid>
              <Grid item xs={6}>
                <Field label="School" name="Education.School"
                       fullWidth
                       component={TextField}
                       required
                       validate={validateRequired}/>
              </Grid>
              <Grid container item xs={6}>
                <Grid item xs={6}>
                  <Field label="From" name="Education.Period.From" type="date"
                         component={TextField}
                         required
                         validate={validateRequired}
                         InputLabelProps={{
                           shrink: true,
                         }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field label="To" name="Education.Period.To" type="date"
                         component={TextField}
                         InputLabelProps={{
                           shrink: true,
                         }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Field label="Description" name="Education.Description"
                       fullWidth
                       component={TextField}
                       required
                       validate={validateRequired}/>
              </Grid>
              <Grid item>
                <Field label="CPA" name="Education.CPA" type="number"
                       component={TextField}
                       required
                       validate={validateRequired}/>
              </Grid>
            </Grid>
            <FieldArray name="Languages" render={arrayHelpers => (
              values.Languages && values.Languages.length > 0 ? (
                values.Languages.map((language, index) => (
                  <Grid container item key={index} spacing={2}>
                    <Grid item>
                      <Field label="Language" name={`Languages.${index}.Language`}
                             component={TextField}
                             required
                             validate={validateRequired}/>
                    </Grid>
                    <Grid item>
                      <Field label="Level" name={`Languages.${index}.Level`}
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
                    Add a language
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

export const EducationForm = withStyles(styles)(educationForm);