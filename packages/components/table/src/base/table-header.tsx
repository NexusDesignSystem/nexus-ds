import {HTMLnexusuiProps} from "@nexus-ds/system";
import {TableHeader as TableHeaderBase} from "@react-stately/table";
import {TableHeaderProps as TableHeaderBaseProps} from "@react-types/table";

export type TableHeaderProps<T> = TableHeaderBaseProps<T> &
  Omit<HTMLnexusuiProps<"thead">, keyof TableHeaderBaseProps<T>>;

const TableHeader = TableHeaderBase as <T>(props: TableHeaderProps<T>) => JSX.Element;

export default TableHeader;
