import * as React from 'react';
import {Field, FieldArray, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {Button, createStyles, Grid, IconButton, Theme, withStyles, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ContactsIcon from '@material-ui/icons/Contacts';

import {InterestData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";

type Data = {
  Interests: InterestData[]
}

type Values = Data;

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const interestForm = (props: Props) => {
  const initValue: Values = {
    Interests: props.Interests,
  };

  const initElementValue: InterestData = '';

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
            <FieldArray name="Interests" render={arrayHelpers => (
              values.Interests && values.Interests.length > 0 ? (
                values.Interests.map((interest, index) => (
                  <Grid container item key={index} spacing={2}>
                    <Grid item>
                      <Field label="Name" name={`Interests.${index}`}
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
                    Add an interest
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

export const InterestForm = withStyles(styles)(interestForm);