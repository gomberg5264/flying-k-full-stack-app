// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
// chai.should();
// const { setServer } = require("../server/app");
// const server = setServer();
// const db = require("knex");

// describe("tests for our server", () => {
//   let request;
//   beforeEach(() => {
//     request = chai.request(server);
//   });
//   describe("GET api/locations", () => {
//     it("test1", async () => {
//       const res = await request.get("/api/locations");
//       JSON.stringify(res.body).should.equal(
//         JSON.stringify(db.select().table("locations"))
//       );
//     });
//   });
// });
