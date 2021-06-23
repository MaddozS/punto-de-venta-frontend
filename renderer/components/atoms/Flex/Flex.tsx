import { styled } from "@material-ui/core/styles";
import Box, { BoxProps } from "@material-ui/core/Box";

interface IFlexProps extends BoxProps {
  direction?: "row" | "column";
  gap?: string;
}

const Flex = styled(({ direction, gap, ...boxProps }) => <Box {...boxProps} />)(
  {
    display: "flex",
    gap: ({ gap = "16px" }: IFlexProps) => gap,
    flexDirection: ({ direction = "row" }: IFlexProps) => direction,
  }
);

export default Flex;
