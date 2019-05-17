import * as React from "react";

import { css, StyleSheet } from "aphrodite/no-important";

import { IUser } from "@store/user/types";

import TableField from "./TableField";

interface IColumn {
  label: string;
  value: string;
}

interface IProps {
  columns: IColumn[];
  data: IUser[];
}

class Table extends React.Component<IProps> {
  public render() {
    const { columns, data } = this.props;

    return (
      <table className={css(styles.table)}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th className={css(styles.tableHeaderCell)} key={column.value}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              {columns.map((column, j) => (
                <TableField value={user[column.value]} type={column.value} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

const styles = StyleSheet.create({
  table: {
    margin: "10px",
    width: "calc(100% - 20px)",
  },
  tableHeaderCell: {
    border: "2px solid #222",
    padding: "10px",
    textAlign: "center",
  },
});
