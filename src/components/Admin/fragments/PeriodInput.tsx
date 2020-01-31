import React from "react";
import {Field, FieldAttributes} from "formik";
import {TextField} from "formik-material-ui";
import {Grid} from "@material-ui/core";

interface PeriodInputProps {
  name: string
  fromProps?: FieldAttributes<any>
  toProps?: FieldAttributes<any>
}

export const PeriodInput = (props: PeriodInputProps) => {
  const {name, fromProps, toProps} = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Field label="From" name={`${name}.From`} type="date"
               fullWidth
               component={TextField}
               InputLabelProps={{
                 shrink: true,
               }}
               {...fromProps}
        />
      </Grid>
      <Grid item xs={6}>
        <Field label="To" name={`${name}.To`} type="date"
               fullWidth
               component={TextField}
               InputLabelProps={{
                 shrink: true,
               }}
               {...toProps}
        />
      </Grid>
    </Grid>
  );
};
