import { expect } from "chai";
import * as actions from "../../src/store/user/actions";
import data from "../fixtures/data";

describe("actions", () => {
  it("should return correct response in success action", () => {
    const users = data.map((user: any) => ({
      city: user.address.city,
      company: user.company.name,
      email: user.email,
      user: user.name,
    }));
    const result = actions.getUsersSuccess(users);

    expect(result.type).to.equal("@@user/GET_USERS_SUCCESS");
    expect(result.payload).to.equal(users);
  });

  it("should return correct response in error action", () => {
    const error = "There was an error!";
    const result = actions.getUsersError(error);

    expect(result.type).to.equal("@@user/GET_USERS_ERROR");
    expect(result.payload).to.equal(error);
  });
});
