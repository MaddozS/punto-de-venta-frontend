import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";
import Table, { ITableColumn } from "components/molecules/Table";
import useDisclosure from "hooks/useDisclosure";
import formatMoney from "utils/formatMoney";
import type { IProduct } from "shared/types/product";

// TODO get this data from products context
const products: IProduct[] = [
  {
    _id: "exampleid1",
    name: "Frozen yoghurt",
    price: 20,
  },
  {
    _id: "exampleid2",
    name: "Ice cream sandwich",
    price: 15,
  },
  {
    _id: "exampleid3",
    name: "Cupcake",
    price: 10,
  },
];

interface IProductTableRow {
  id: string;
  name: string;
  price: string;
}

const parseProducts = (products: IProduct[]): IProductTableRow[] =>
  products.map(({ price, _id, name }) => ({
    id: _id,
    name,
    price: formatMoney(price),
  }));

const productsTableColumns: ITableColumn[] = [
  {
    name: "Id",
    dataKey: "id",
    key: "id",
  },
  {
    name: "Nombre",
    dataKey: "name",
    key: "name",
  },
  {
    name: "Precio",
    dataKey: "price",
    key: "price",
  },
];

const ProductsTable = () => {
  const { isOpen: newProductFormIsOpen, onToggle: toggleNewProductForm } =
    useDisclosure();
  const productsTableData = parseProducts(products);

  return (
    <Grid gap="32px">
      <Flex justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle2">Lista de productos</Typography>
        <Button variant="contained" color="primary">
          Nuevo Producto
        </Button>
      </Flex>
      <Table
        ariaLabel="Tabla de productos"
        columns={productsTableColumns}
        data={productsTableData}
      />
    </Grid>
  );
};

export default ProductsTable;
