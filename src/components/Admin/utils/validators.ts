export const validateRequired = (value: any) => {
  if (!value) {
    return 'This field is required';
  }
};
