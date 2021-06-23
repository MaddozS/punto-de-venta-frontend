import Typography from "@material-ui/core/Typography";
import SectionLayout from "components/templates/SectionLayout";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";
import NewSaleForm from "components/organisms/NewSaleForm";
import CartProductsTable from "components/organisms/CartProductsTable";
import CartResumeCard from "components/organisms/CartResumeCard";
import SalesHeader from "components/organisms/SalesHeader";

const Sales = () => (
  <SectionLayout>
    <SalesHeader />
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
