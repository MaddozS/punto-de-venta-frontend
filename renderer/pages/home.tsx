import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SectionLayout from "../components/templates/SectionLayout";
import Flex from "../components/atoms/Flex";
import Grid from "../components/atoms/Grid";
import { HeaderContainer } from "../components/atoms/Sales";

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
        <Box>form</Box>
        <Box>resume</Box>
      </Grid>
    </Flex>
  </SectionLayout>
);

export default Sales;
