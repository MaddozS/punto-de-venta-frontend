import { FC } from "react";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "components/atoms/Grid";
import Flex from "components/atoms/Flex";
import Link from "components/atoms/Link";

// padding="64px 32px"
const Container = styled(Grid)({
  height: "100vh",
  gridTemplateColumns: "auto 1fr",
  overflow: "hidden",
});

const ContentContainer = styled(Box)({
  height: "100%",
  overflowY: "scroll",
});

const ItemText = styled(ListItemText)({
  paddingLeft: "16px",
});

const menuItems = [
  {
    label: "Ventas",
    href: "/home",
  },
  {
    label: "Productos",
    href: "/products",
  },
];

const MainLayout: FC = ({ children }) => (
  <Container>
    <Flex direction="column" borderRight="thin gray solid">
      <Box padding="64px 32px">
        <Typography variant="h5">Tiendita</Typography>
      </Box>
      <List>
        {menuItems.map(({ label, href }, index) => (
          <Link key={label} href={href} underline="none" color="textPrimary">
            <ListItem button>
              <ItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Flex>
    <ContentContainer>{children}</ContentContainer>
  </Container>
);

export default MainLayout;
