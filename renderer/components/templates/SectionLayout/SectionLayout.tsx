import { FC } from "react";
import { styled } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const SectionLayout = styled(Container)({
  display: "grid",
  gap: "64px",
  paddingBottom: "64px",
  paddingTop: "64px",
});

export default SectionLayout;
