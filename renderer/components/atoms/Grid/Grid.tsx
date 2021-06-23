import { styled } from "@material-ui/core/styles";
import Box, { BoxProps } from "@material-ui/core/Box";

interface IGridProps extends BoxProps {
  gap?: string;
}

const Grid = styled(({ gap, ...boxProps }) => <Box {...boxProps} />)({
  display: "grid",
  gap: ({ gap = "0px" }: IGridProps) => gap,
});

export default Grid;
