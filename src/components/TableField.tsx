import * as React from "react";

import { css, StyleSheet } from "aphrodite/no-important";

interface IProps {
  value: string;
  type: string;
}

class TableField extends React.Component<IProps> {
  public render() {
    const { value, type } = this.props;

    return (
      <td className={css(styles.tableBodyCell)} key={value}>
        {type === "email" ? (<a href={`mailto:${value}`} target="_blank">{value}</a>) : ( value )}
      </td>
    );
  }
}

export default TableField;

const styles = StyleSheet.create({
  tableBodyCell: {
    border: "1px solid #222",
    padding: "10px",
    textAlign: "center",
  },
});
