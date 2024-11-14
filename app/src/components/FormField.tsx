import { Control, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';

interface FormFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: any;
  gridSize?: number;
}

const FormField = ({
  name,
  label,
  control,
  errors,
  gridSize = 12,
}: FormFieldProps) => (
  <Grid item xs={gridSize}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  </Grid>
);

export default FormField;
