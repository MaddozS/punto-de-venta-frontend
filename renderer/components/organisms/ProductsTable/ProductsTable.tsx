import Table, { ITableColumn } from "components/molecules/Table";
import useProductsProvider from "hooks/products";
import formatMoney from "utils/formatMoney";
import type { IProduct } from "shared/types/product";

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
  const { products, loadingProducts, errorLoadingProducts } =
    useProductsProvider();
  const productsTableData = parseProducts(products);

  return (
    <Table
      ariaLabel="Tabla de productos"
      columns={productsTableColumns}
      data={productsTableData}
      loading={loadingProducts}
      error={errorLoadingProducts}
    />
  );
};

export default ProductsTable;
