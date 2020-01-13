import React from "react";
import {Field, FieldValidator} from "formik";
import {TextField} from "formik-material-ui";
import {Grid} from "@material-ui/core";

interface TextLinkInputProps {
  name: string
  label?: string
  validate?: FieldValidator
}

export const TextLinkInput = (props: TextLinkInputProps) => {
  const {name, label, validate} = props;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Field label={(label || name) + " Text"} name={`${name}.Text`} component={TextField}
               fullWidth
               validate={validate}
        />
      </Grid>
      <Grid item>
        <Field label={(label || name) + " Link"} name={`${name}.Link`} component={TextField}
               fullWidth
               validate={validate}
        />
      </Grid>
    </Grid>
  );
};
