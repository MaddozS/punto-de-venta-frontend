import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { HeaderContainer } from "components/atoms/Sales";
import Flex from "components/atoms/Flex";
import formatMoney from "utils/formatMoney";

const SalesHeader = () => {
  // TODO get this data from sales context
  const totalSoldToday = 717.5;
  const formatedSoldToday = formatMoney(totalSoldToday);

  return (
    <HeaderContainer>
      <Typography variant="h5">Ventas</Typography>
      <Flex gap="16px">
        <Button variant="outlined">Generar Utilidad</Button>
        <Flex gap="8px" alignItems="center">
          <Typography variant="body1">Vendido hoy:</Typography>
          <Typography variant="h5">{formatedSoldToday}</Typography>
        </Flex>
      </Flex>
    </HeaderContainer>
  );
};

export default SalesHeader;
