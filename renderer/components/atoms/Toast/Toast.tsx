import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface IToast {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: "error" | "success" | "info" | "warning";
}

const Toast = ({ message, type = "success", isOpen, onClose }: IToast) => (
  <Snackbar open={isOpen} onClose={onClose} autoHideDuration={4000}>
    <Alert severity={type} onClose={onClose} elevation={6} variant="filled">
      {message}
    </Alert>
  </Snackbar>
);

export default Toast;
