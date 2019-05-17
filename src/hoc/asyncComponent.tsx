import * as React from "react";

export default function asyncComponent(importComponent: any) {
  return class AsyncComponent extends React.Component<
    {},
    {
      Component?: any;
    }
  > {
    constructor(props: {}) {
      super(props);

      this.state = {
        Component: undefined,
      };
    }

    public async componentDidMount() {
      const { default: Component } = await importComponent();

      this.setState({
        Component,
      });
    }

    public render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  };
}
