import {HTMLnexusuiProps} from "@nexus-ds/system";
import {Cell} from "@react-stately/table";
import {CellProps} from "@react-types/table";

export type TableCellProps = CellProps & HTMLnexusuiProps<"td">;

const TableCell = Cell as (props: TableCellProps) => JSX.Element;

export default TableCell;
