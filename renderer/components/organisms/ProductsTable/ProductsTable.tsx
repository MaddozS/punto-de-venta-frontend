import Table, { ITableColumn } from "components/molecules/Table";
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
  const productsTableData = parseProducts(products);

  return (
    <Table
      ariaLabel="Tabla de productos"
      columns={productsTableColumns}
      data={productsTableData}
    />
  );
};

export default ProductsTable;
