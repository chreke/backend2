const axios = require("axios");

const getUsers = async () => {
  const response = await axios.get("https://randomuser.me/api/?results=10");
  const users = response.data.results;
  return users.map(({ name, email }) => ({
    firstName: name.first,
    lastName: name.last,
    email,
  }));
};

module.exports = { getUsers };
