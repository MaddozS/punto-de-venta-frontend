import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SectionLayout from "components/templates/SectionLayout";
import MainLayout from "components/templates/MainLayout";
import ProductsTable from "components/organisms/ProductsTable";
import NewProductForm from "components/organisms/NewProductForm";
import Modal from "components/molecules/Modal";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";
import ProductsProvider from "providers/ProductsProvider";
import { useDisclosure } from "hooks/common";
import ERoutes from "shared/constants/routes";

const Products = () => {
  const { isOpen: newProductFormIsOpen, onToggle: toggleNewProductForm } =
    useDisclosure();

  return (
    <>
      <ProductsProvider>
        <MainLayout active={ERoutes.PRODUCTS}>
          <SectionLayout>
            <Typography variant="h5">Productos</Typography>
            <Grid gap="32px">
              <Flex justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2">Lista de productos</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={toggleNewProductForm}
                >
                  Nuevo Producto
                </Button>
              </Flex>
              <ProductsTable />
            </Grid>
          </SectionLayout>
        </MainLayout>
      </ProductsProvider>
      <Modal
        open={newProductFormIsOpen}
        onClose={toggleNewProductForm}
        maxWidth="450px"
        maxHeight="550px"
      >
        <NewProductForm onCancel={toggleNewProductForm} />
      </Modal>
    </>
  );
};

export default Products;
