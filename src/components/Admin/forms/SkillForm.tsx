import * as React from 'react';
import {Field, FieldArray, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {Button, createStyles, Grid, IconButton, InputAdornment, Theme, withStyles, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import {SkillGroupData, SkillItemData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";

type Data = {
  Skills: SkillGroupData[]
};

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const skillForm = (props: Props) => {
  const initValue: Data = {
    Skills: props.Skills
  };

  const initElementValue: SkillGroupData = {
    Name: '',
    Items: [
      {
        Name: '',
        Level: 0,
      }
    ],
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
          <FieldArray name="Skills" render={groupFields => (
            <Grid container spacing={4}>
              {values.Skills && values.Skills.length > 0 ? (
                values.Skills.map((skillGroup, index) => (
                  <Grid container item spacing={2} key={`group-${index}`}>
                    <Grid container item alignItems="center" spacing={2} xs={12}>
                      <Grid item>
                        <Field label="Group Name" name={`Skills.${index}.Name`}
                               component={TextField}
                               required
                               validate={validateRequired}/>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" className={props.classes.warning}
                                onClick={() => groupFields.remove(index)}>
                          <DeleteForeverIcon/>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary"
                                onClick={() => groupFields.insert(index + 1, {...initElementValue})}>
                          <LibraryAddIcon/>
                        </Button>
                      </Grid>
                    </Grid>
                    <SkillItems name={`Skills.${index}.Items`} values={skillGroup.Items}/>
                  </Grid>
                ))
              ) : (
                <Grid item>
                  <Button variant="contained" color="primary"
                          startIcon={<LibraryAddIcon/>}
                          onClick={() => groupFields.push({...initElementValue})}>
                    Add a skill group
                  </Button>
                </Grid>
              )}
            </Grid>
          )}/>
        </Form>
      )}
    </Formik>
  )
};

interface SkillItemsProps {
  name: string
  values: Array<any>
}

const SkillItems = (props: SkillItemsProps) => {
  const initElementValue: SkillItemData = {
    Name: '',
    Level: 0,
  };

  return (
    <FieldArray name={props.name} render={itemFields => (
      <Grid container item spacing={4}>
        {props.values && props.values.length > 0 ? (
          props.values.map((skill, index) => (
            <Grid item key={`skill-${index}`}>
              <Field label="Skill Name" name={`${props.name}.${index}.Name`}
                     component={TextField}
                     required
                     validate={validateRequired}/>
              <Field label="Skill Level" name={`${props.name}.${index}.Level`}
                     component={TextField}
                     type="number"
                     InputProps={{
                       endAdornment: <InputAdornment position="end">%</InputAdornment>,
                     }}
                     required
                     validate={validateRequired}
              />
              <IconButton aria-label="delete" onClick={() => itemFields.remove(index)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton aria-label="add"
                          onClick={() => itemFields.insert(index + 1, {...initElementValue})}>
                <AddCircleIcon/>
              </IconButton>
            </Grid>
          ))
        ) : (
          <Grid item>
            <Button variant="contained" color="primary"
                    startIcon={<AddIcon/>}
                    onClick={() => itemFields.push({...initElementValue})}>
              Add a skill
            </Button>
          </Grid>
        )}
      </Grid>
    )}/>
  )
};

const styles = (theme: Theme) =>
  createStyles({
    ...themeStyles
  });

export const SkillForm = withStyles(styles)(skillForm);