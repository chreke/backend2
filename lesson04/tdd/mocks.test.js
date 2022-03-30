const { displayUsers } = require("./mocks");
const users = require("./users");

jest.mock("./users");

test("should format users correctly", async () => {
  users.getUsers.mockResolvedValue([
    {
      firstName: "Johnny",
      lastName: "Appleseed",
      email: "johnny.appleseed@apple.com",
    },
  ]);
  expect(await displayUsers()).toBe(
    "Johnny Appleseed johnny.appleseed@apple.com"
  );
});
