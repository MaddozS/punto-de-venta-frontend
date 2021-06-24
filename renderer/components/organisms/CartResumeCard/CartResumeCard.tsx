import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "components/atoms/Grid";
import formatMoney from "utils/formatMoney";

const Background = styled(Paper)({
  display: "grid",
  gap: "32px",
  padding: "16px",
});

// TODO bring this data from cart context
const subtotal = 96;
const discount = 12;
const total = 84;
const appliedDiscounts = [
  {
    id: "exampleid1",
    description: "Ruffles Queso 2x1",
  },
];

const CartResumeCard = () => {
  const formatedSubtotal = formatMoney(subtotal);
  const formatedDiscount = formatMoney(discount);
  const formatedTotal = formatMoney(total);

  return (
    <Background variant="outlined">
      <Typography variant="subtitle2">Resumen de la venta</Typography>
      <Grid gap="16px">
        <Typography variant="body2">Subtotal: {formatedSubtotal}</Typography>
        <Typography variant="body2">Descuento: {formatedDiscount}</Typography>
        <Typography variant="subtitle2">Total: {formatedTotal}</Typography>
      </Grid>
      <Grid gap="16px">
        <Typography variant="body2">Descuentos aplicados</Typography>
        {appliedDiscounts.map(({ id, description }) => (
          <Typography variant="subtitle2" key={id}>
            {description}
          </Typography>
        ))}
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
};

export default CartResumeCard;
