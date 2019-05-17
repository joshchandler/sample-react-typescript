import { action } from "typesafe-actions";
import { IUser, UserActionTypes } from "./types";

export const getUsers = () => action(UserActionTypes.GET_USERS);

export const getUsersSuccess = (data: IUser[]) =>
  action(UserActionTypes.GET_USERS_SUCCESS, data);

export const getUsersError = (message: string) =>
  action(UserActionTypes.GET_USERS_ERROR, message);
