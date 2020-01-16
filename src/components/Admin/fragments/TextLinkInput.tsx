import React from "react";
import {Field, FieldAttributes} from "formik";
import {TextField} from "formik-material-ui";
import {Grid} from "@material-ui/core";

interface TextLinkInputProps extends FieldAttributes<any> {
  name: string
  label?: string
}

export const TextLinkInput = (props: TextLinkInputProps) => {
  const {name, label, ...others} = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Field label={(label || name) + " Text"} name={`${name}.Text`} component={TextField}
               fullWidth
               {...others}
        />
      </Grid>
      <Grid item xs={7}>
        <Field label={(label || name) + " Link"} name={`${name}.Link`} component={TextField}
               fullWidth
               {...others}
        />
      </Grid>
    </Grid>
  );
};
