import MuiTable from "@material-ui/core/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Switch, Case } from "react-if";
import Grid from "components/atoms/Grid";

interface ITableColumn {
  name: string;
  dataKey: string;
  key: string | number;
  align?: "right" | "left" | "center";
}

interface ITable {
  ariaLabel: string;
  columns: ITableColumn[];
  data: unknown[];
  loading?: boolean;
  emptyMessage?: string;
  error?: boolean;
  errorMessage?: string;
}

const Table = ({
  columns,
  data,
  ariaLabel,
  loading = false,
  emptyMessage = "No hay datos",
  error = false,
  errorMessage = "No se ha podido cargar la información",
}: ITable) => (
  <TableContainer component={Paper}>
    <MuiTable aria-label={ariaLabel}>
      <TableHead>
        <TableRow>
          {columns.map(({ name, key, align = "left" }) => (
            <TableCell key={key} align={align}>
              {name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <Switch>
          <Case condition={loading}>
            <Grid padding="32px" placeItems="center" textAlign="center">
              <CircularProgress />
            </Grid>
          </Case>
          <Case condition={error}>
            <Grid padding="32px" placeItems="center" textAlign="center">
              <Typography variant="subtitle2">{errorMessage}</Typography>
            </Grid>
          </Case>
          <Case condition={!data.length}>
            <Grid padding="32px" textAlign="center">
              <Typography variant="subtitle2">{emptyMessage}</Typography>
            </Grid>
          </Case>
          <Case condition={data.length}>
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map(({ dataKey, key, align = "left" }) => (
                  <TableCell key={key} align={align}>
                    {item[dataKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Case>
        </Switch>
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
export type { ITableColumn };
