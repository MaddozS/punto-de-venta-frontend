import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import SectionLayout from "../components/templates/SectionLayout";
import Flex from "../components/atoms/Flex";
import { HeaderContainer } from "../components/atoms/Sales";

const Sales = () => (
  <SectionLayout>
    <HeaderContainer>
      <Typography variant="h5">Ventas</Typography>
      <Flex>
        <Button variant="outlined">Generar Utilidad</Button>
        <Flex gap="8px" alignItems="center">
          <Typography variant="body1">Vendido hoy:</Typography>
          <Typography variant="h5">$717.50</Typography>
        </Flex>
      </Flex>
    </HeaderContainer>
    <Flex gap="32px" direction="column">
      <Flex>
        <Typography variant="subtitle2">Nueva Venta</Typography>
      </Flex>
    </Flex>
  </SectionLayout>
);

export default Sales;
