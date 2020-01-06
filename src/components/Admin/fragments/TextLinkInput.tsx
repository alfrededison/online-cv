import React from "react";
import Box from '@material-ui/core/Box';
import {Field, FieldValidator} from "formik";
import {TextField} from "formik-material-ui";

interface TextLinkInputProps {
  name: string;
  validate?: FieldValidator
}

export const TextLinkInput = (props: TextLinkInputProps) => {
  const {name, validate} = props;

  return (
    <Box mt={3}>
      <Field label={`${name} Text`} name={`${name}.Text`} component={TextField}
             fullWidth
             validate={validate}
      />
      <br/>
      <Field label={`${name} Link`} name={`${name}.Link`} component={TextField}
             fullWidth
             validate={validate}
      />
    </Box>
  );
};
