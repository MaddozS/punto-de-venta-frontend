import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "components/atoms/Grid";

const Background = styled(Paper)({
  display: "grid",
  gap: "32px",
  padding: "16px",
});

const CartResumeCard = () => (
  <Background variant="outlined">
    <Typography variant="subtitle2">Resumen de la venta</Typography>
    <Grid gap="16px">
      <Typography variant="body2">Subtotal: $96.00</Typography>
      <Typography variant="body2">Descuento: $12.00</Typography>
      <Typography variant="subtitle2">Total: $84.00</Typography>
    </Grid>
    <Grid gap="16px">
      <Typography variant="body2">Descuentos aplicados</Typography>
      <Typography variant="subtitle2">Ruffles Queso 2x1</Typography>
    </Grid>
    <FormControlLabel
      control={<Checkbox name="generateVoucher" color="primary" />}
      label="¿Generar comprobante?"
    />
    <Button variant="contained" color="primary">
      Terminar
    </Button>
  </Background>
);

export default CartResumeCard;
