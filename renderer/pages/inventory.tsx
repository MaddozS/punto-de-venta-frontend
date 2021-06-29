import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MainLayout from "components/templates/MainLayout";
import SectionLayout from "components/templates/SectionLayout";
import InventoryTable from "components/organisms/InventoryTable";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";
import InventoryProvider from "providers/InventoryProvider";
import ERoutes from "shared/constants/routes";

const Inventory = () => (
  <InventoryProvider>
    <MainLayout active={ERoutes.INVENTORY}>
      <SectionLayout>
        <Typography variant="h5">Inventario</Typography>
        <Grid gap="32px">
          <Flex justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle2">Lista de productos</Typography>
            <Button variant="contained" color="primary">
              Modificar Inventario
            </Button>
          </Flex>
          <InventoryTable />
        </Grid>
      </SectionLayout>
    </MainLayout>
  </InventoryProvider>
);

export default Inventory;
