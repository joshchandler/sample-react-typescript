import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IApplicationState } from "@store";

import { getUsers } from "@store/user/actions";
import { GetUsers, IUser } from "@store/user/types";

import Table from "@components/Table";

interface IPropsFromState {
  usersLoading: boolean;
  usersData?: IUser[];
  usersErrors?: string;
}

interface IPropsFromDispatch {
  getUsers: GetUsers;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

class Home extends React.Component<AllProps, {}> {
  public componentDidMount() {
    const props = this.props;

    if (!props.usersData) {
      props.getUsers();
    }
  }

  public render() {
    const { usersLoading, usersData, usersErrors } = this.props;
    const columns = [
      {
        label: "Name",
        value: "user",
      },
      {
        label: "Email",
        value: "email",
      },
      {
        label: "City",
        value: "city",
      },
      {
        label: "Company",
        value: "company",
      },
    ];

    if (usersLoading) {
      return <div>Loading...</div>;
    }

    if (usersErrors) {
      return <div>There was an error! {usersErrors}</div>;
    }

    return (
      <div>{usersData && <Table columns={columns} data={usersData} />}</div>
    );
  }
}

const mapStateToProps = ({ user }: IApplicationState) => ({
  // Props from state
  usersData: user.usersData,
  usersErrors: user.usersErrors,
  usersLoading: user.usersLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // Dispatches
  getUsers: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
