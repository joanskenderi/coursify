import { Alert, Snackbar } from '@mui/material';

type ToastProps = {
  open: boolean;
  message: string;
};

const Toast = ({ open, message }: ToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
