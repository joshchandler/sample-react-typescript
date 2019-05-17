import { IUserState, UserActionTypes } from "./types";

export default (
  state: IUserState = {
    usersData: undefined,
    usersErrors: undefined,
    usersLoading: true,
  },
  action: {
    type: string;
    payload: any;
  },
) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return {
        ...state,
        usersLoading: true,
      };

    case UserActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
        usersLoading: false,
      };

    case UserActionTypes.GET_USERS_ERROR:
      return {
        ...state,
        usersErrors: action.payload,
        usersLoading: false,
      };

    default:
      return state;
  }
};
