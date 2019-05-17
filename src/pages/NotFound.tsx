import { css, StyleSheet } from "aphrodite/no-important";
import * as React from "react";

class NotFound extends React.Component {
  public render() {
    return (
      <div>
        <h1 className={css(styles.notFoundHeader)}>How'd you get here?</h1>
        <a href="/" className={css(styles.notFoundLink)}>
          Home
        </a>
      </div>
    );
  }
}

export default NotFound;

const styles = StyleSheet.create({
  notFoundHeader: {
    marginTop: "10px",
    textAlign: "center",
  },
  notFoundLink: {
    display: "block",
    textAlign: "center",
  },
});
