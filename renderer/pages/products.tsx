import Typography from "@material-ui/core/Typography";
import SectionLayout from "components/templates/SectionLayout";
import ProductsTable from "components/organisms/ProductsTable";

const Products = () => (
  <SectionLayout>
    <Typography variant="h5">Productos</Typography>
    <ProductsTable />
  </SectionLayout>
);

export default Products;
