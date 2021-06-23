import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name: string, quantity: number, price: string) {
  return { name, quantity, price };
}

const rows = [
  createData("Frozen yoghurt", 2, "$20"),
  createData("Ice cream sandwich", 1, "$15"),
  createData("Cupcake", 1, "$10"),
];

const CartProductsTable = () => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell align="right">Cantidad</TableCell>
          <TableCell align="right">Precio Individual</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CartProductsTable;
