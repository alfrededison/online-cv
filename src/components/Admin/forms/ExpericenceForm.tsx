import * as React from 'react';
import {Field, FieldArray, Form, Formik, FormikHelpers} from 'formik';
import {TextField,} from 'formik-material-ui';
import {
  Button,
  createStyles,
  Grid,
  IconButton,
  Paper,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import {ExperienceData, ProjectData, SubProjectData} from "../../../interface";
import {themeStyles} from "../utils/theme";
import {validateRequired} from "../utils/validators";
import {TextLinkInput} from "../fragments/TextLinkInput";
import {PeriodInput} from "../fragments/PeriodInput";

type Data = {
  Experiences: ExperienceData[]
};

interface PropsFromStyles extends WithStyles<typeof styles> {
}

interface Props extends Data, PropsFromStyles {
  onSubmit: (values: Data) => void
}

const experienceForm = (props: Props) => {
  const initValue: Data = {
    Experiences: props.Experiences
  };

  const initElementValue: ExperienceData = {
    Title: '',
    Company: {
      Text: '',
      Link: '',
    },
    Period: {
      From: new Date(),
      To: '',
    },
    Projects: [
      {
        Description: '',
        Responsibilities: '',
      }
    ]
  };

  const validators = (values: Data) => {

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
          <FieldArray name="Experiences" render={groupFields => (
            <Grid container spacing={4}>
              {values.Experiences && values.Experiences.length > 0 ? (
                values.Experiences.map((experienceGroup, index) => (
                  <Grid container item spacing={2} key={`group-${index}`}>
                    <Paper className={classes.paper}>
                      <Grid container item alignItems="center" spacing={2} xs={12}>
                        <Grid item>
                          <Field label="Title" name={`Experiences.${index}.Title`}
                                 component={TextField}
                                 required
                                 validate={validateRequired}/>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" className={classes.warning}
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
                      <Grid container item spacing={2} xs={12}>
                        <Grid item xs={12} lg={6}>
                          <TextLinkInput label="Company"
                                         name={`Experiences.${index}.Company`}
                                         required
                                         validate={validateRequired}
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <PeriodInput name={`Experiences.${index}.Period`}
                                       fromProps={{
                                         required: true,
                                         validate: {validateRequired},
                                       }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <ProjectItems name={`Experiences.${index}.Projects`} values={experienceGroup.Projects}/>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              ) : (
                <Grid item>
                  <Button variant="contained" color="primary"
                          startIcon={<LibraryAddIcon/>}
                          onClick={() => groupFields.push({...initElementValue})}>
                    Add a experience group
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

interface ProjectItemsProps {
  name: string
  values: Array<any>
}

const ProjectItems = (props: ProjectItemsProps) => {
  const initElementValue: ProjectData = {
    Description: '',
    Responsibilities: '',
  };

  return (
    <FieldArray name={props.name} render={itemFields => (
      <Grid container spacing={4}>
        {props.values && props.values.length > 0 ? (
          <Grid container item spacing={2}>
            <Grid item>
              <Typography variant="h5">Projects</Typography>
            </Grid>
            {props.values.map((project, index) => (
              <Grid container item key={`project-${index}`}>
                <Grid item xs={12}>
                  <Field label="Project Description" name={`${props.name}.${index}.Description`}
                         fullWidth
                         component={TextField}
                         required
                         validate={validateRequired}/>
                </Grid>
                <Grid item xs={12}>
                  <Field label="Responsibilities" name={`${props.name}.${index}.Responsibilities`}
                         component={TextField}
                         multiline
                         fullWidth
                         required
                         validate={validateRequired}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SubProjectItems name={`${props.name}.${index}.ResponsibilityGroups`}
                                   values={project.ResponsibilityGroups}/>
                </Grid>
                <Grid item>
                  <IconButton aria-label="delete" onClick={() => itemFields.remove(index)}>
                    <DeleteIcon/>
                  </IconButton>
                  <IconButton aria-label="add"
                              onClick={() => itemFields.insert(index + 1, {...initElementValue})}>
                    <AddCircleIcon/>
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid item>
            <Button variant="contained" color="primary"
                    startIcon={<AddIcon/>}
                    onClick={() => itemFields.push({...initElementValue})}>
              Add a project
            </Button>
          </Grid>
        )}
      </Grid>
    )}/>
  )
};

const SubProjectItems = (props: ProjectItemsProps) => {
  const initElementValue: SubProjectData = {
    Description: '',
    Responsibilities: '',
  };

  return (
    <FieldArray name={props.name} render={itemFields => (
      <Grid container item spacing={1}>
        {props.values && props.values.length > 0 ? (
          <Grid container item spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Responsibility Group</Typography>
            </Grid>
            <Grid item xs={1}/>
            <Grid container item xs={11}>
              {props.values.map((subProject, index) => (
                <Grid container item key={`subProject-${index}`}>
                  <Grid item xs={12}>
                    <Field label="Description" name={`${props.name}.${index}.Description`}
                           fullWidth
                           component={TextField}
                           required
                           validate={validateRequired}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Field label="Responsibilities" name={`${props.name}.${index}.Responsibilities`}
                           component={TextField}
                           multiline
                           fullWidth
                           required
                           validate={validateRequired}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton aria-label="delete" onClick={() => itemFields.remove(index)}>
                      <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="add"
                                onClick={() => itemFields.insert(index + 1, {...initElementValue})}>
                      <AddCircleIcon/>
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Button variant="contained" color="secondary" size="small"
                    startIcon={<AddIcon/>}
                    onClick={() => itemFields.push({...initElementValue})}>
              Add a responsibility group
            </Button>
          </Grid>
        )}
      </Grid>
    )}/>
  )
};

const styles = (theme: Theme) => {
  const {warning} = themeStyles;
  return createStyles({
    warning,
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  });
};

export const ExperienceForm = withStyles(styles)(experienceForm);