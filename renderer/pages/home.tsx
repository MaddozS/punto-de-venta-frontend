import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SectionLayout from "components/templates/SectionLayout";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";
import { HeaderContainer } from "components/atoms/Sales";
import NewSaleForm from "components/organisms/NewSaleForm";
import CartProductsTable from "components/organisms/CartProductsTable";
import CartResumeCard from "components/organisms/CartResumeCard";

const Sales = () => (
  <SectionLayout>
    <HeaderContainer>
      <Typography variant="h5">Ventas</Typography>
      <Flex gap="16px">
        <Button variant="outlined">Generar Utilidad</Button>
        <Flex gap="8px" alignItems="center">
          <Typography variant="body1">Vendido hoy:</Typography>
          <Typography variant="h5">$717.50</Typography>
        </Flex>
      </Flex>
    </HeaderContainer>
    <Flex gap="32px" direction="column">
      <Typography variant="subtitle2">Nueva Venta</Typography>
      <Grid gridTemplateColumns="65% auto" gap="64px">
        <Flex gap="32px" direction="column">
          <NewSaleForm />
          <CartProductsTable />
        </Flex>
        <CartResumeCard />
      </Grid>
    </Flex>
  </SectionLayout>
);

export default Sales;
