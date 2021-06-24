import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Flex from "components/atoms/Flex";

// TODO add logic
const ProductForm = () => (
  <Flex
    direction="column"
    justifyContent="space-between"
    height="100%"
    gap="32px"
  >
    <Flex gap="32px" direction="column">
      <Typography variant="h5">Nuevo Producto</Typography>
      <Flex gap="16px" direction="column">
        <TextField variant="outlined" label="Nombre" name="name" />
        <TextField
          id="outlined-adornment-amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="outlined"
          label="Precio"
          type="tel"
          name="price"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="outlined"
          label="Descripción"
          name="description"
          multiline
          rows={6}
        />
      </Flex>
    </Flex>
    <Flex justifyContent="flex-end" gap="16px">
      <Button variant="outlined">Cancelar</Button>
      <Button color="primary" variant="contained">
        Agregar Producto
      </Button>
    </Flex>
  </Flex>
);

export default ProductForm;
