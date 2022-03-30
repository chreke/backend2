const { getUsers } = require("./users");

const displayUsers = async () => {
  const users = await getUsers();
  return users
    .map(
      ({ firstName, lastName, email }) => `${firstName} ${lastName} ${email}`
    )
    .join("\n");
};

module.exports = { displayUsers };
