var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();
chai.use(require("chai-change"));
describe("Category (model)", function() {
  describe("#create()", function() {
    it("should add 1 record to DB", async function() {
      expect(async () => {
        await Category.create({
          name: "House",
          type: "income",
          icon: "house"
        }).fetch();
      }).to.alter(
        async () => {
          return await Category.count();
        },
        { by: 1 }
      );
    });
  });
});
