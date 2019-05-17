export interface IUser {
  user: string;
  email: string;
  city: string;
  company: string;
}

export const enum UserActionTypes {
  GET_USERS = "@@user/GET_USERS",
  GET_USERS_SUCCESS = "@@user/GET_USERS_SUCCESS",
  GET_USERS_ERROR = "@@user/GET_USERS_ERROR",
}

export interface IUserState {
  readonly usersLoading: boolean;
  readonly usersData?: IUser[];
  readonly usersErrors?: string;
}

export type GetUsers = () => {
  type: UserActionTypes.GET_USERS;
};
