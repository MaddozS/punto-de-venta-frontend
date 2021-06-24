import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "components/atoms/Grid";
import ComboBox from "components/molecules/ComboBox";

const NewSaleForm = () => {
  return (
    <form action="">
      <Grid gridTemplateColumns="70% auto" gap="16px">
        <ComboBox label="Producto" />
        <TextField
          id="standard-number"
          variant="outlined"
          label="Cantidad"
          type="number"
          defaultValue="1"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ComboBox label="Cliente" />
        <Button variant="contained" color="primary">
          Agregar
        </Button>
      </Grid>
    </form>
  );
};

export default NewSaleForm;
