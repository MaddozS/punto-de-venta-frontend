import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "components/atoms/Grid";
import formatMoney from "utils/formatMoney";

interface ICartItem {
  name: string;
  quantity: number;
  price: number;
}

interface ICartTableRow {
  name: string;
  quantity: number;
  price: string;
}

const parseCartItems = (items: ICartItem[]): ICartTableRow[] =>
  items.map(({ price, ...itemData }) => ({
    ...itemData,
    price: formatMoney(price),
  }));

// TODO get this data from cart context
const cartItems: ICartItem[] = [
  {
    name: "Frozen yoghurt",
    quantity: 2,
    price: 20,
  },
  {
    name: "Ice cream sandwich",
    quantity: 1,
    price: 15,
  },
  {
    name: "Cupcake",
    quantity: 1,
    price: 10,
  },
];

const CartProductsTable = () => {
  const rows = parseCartItems(cartItems);

  return (
    <Grid gap="16px">
      <Typography variant="subtitle2">Carrito</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio Individual</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ name, quantity, price }) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{quantity}</TableCell>
                <TableCell align="right">{price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CartProductsTable;
