import { expect } from "chai";
import * as request from "request";
import * as sinon from "sinon";
import * as sagas from "../../src/store/user/sagas";
import data from "../fixtures/data";

describe("request", () => {

  it("should format response correctly", () => {
    const reqGet = sinon
      .stub(request, "get")
      .callsFake(
        function(this: any, url?: any, callback?: any) {
          expect(url).to.equal("https://jsonplaceholder.typicode.com/users");
          callback(undefined, {
            body: JSON.stringify(data),
          }, JSON.stringify(data));
          return this.Request.prototype;
        },
      );

    return sagas.get().then((response: any) => {
      expect(response.length).to.equal(2);
      expect(response[0].city).to.equal(data[0].address.city);
      expect(response[0].company).to.equal(data[0].company.name);
      expect(response[0].email).to.equal(data[0].email);
      expect(response[0].user).to.equal(data[0].name);

      reqGet.restore();
    });
  });

});
