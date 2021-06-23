import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
}

const Table = ({ columns, data, ariaLabel }: ITable) => (
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
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map(({ dataKey, key, align = "left" }) => (
              <TableCell key={key} align={align}>
                {item[dataKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
