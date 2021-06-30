import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MainLayout from "components/templates/MainLayout";
import SectionLayout from "components/templates/SectionLayout";
import InventoryTable from "components/organisms/InventoryTable";
import InventoryForm from "components/organisms/InventoryForm";
import Modal from "components/molecules/Modal";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";
import InventoryProvider from "providers/InventoryProvider";
import { useDisclosure } from "hooks/common";
import ERoutes from "shared/constants/routes";

const Inventory = () => {
  const { isOpen: inventoryFormIsOpen, onToggle: toggleInventoryForm } =
    useDisclosure();

  return (
    <InventoryProvider>
      <MainLayout active={ERoutes.INVENTORY}>
        <SectionLayout>
          <Typography variant="h5">Inventario</Typography>
          <Grid gap="32px">
            <Flex justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2">Lista de productos</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleInventoryForm}
              >
                Modificar Inventario
              </Button>
            </Flex>
            <InventoryTable />
          </Grid>
        </SectionLayout>
      </MainLayout>
      <Modal
        open={inventoryFormIsOpen}
        onClose={toggleInventoryForm}
        maxWidth="450px"
        maxHeight="550px"
      >
        <InventoryForm onCancel={toggleInventoryForm} />
      </Modal>
    </InventoryProvider>
  );
};

export default Inventory;
