const { User } = require("../models");
const user = require("../models/user");

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        console.log(err);
      }
    }
  },
  Mutation: {
    register: async (_, args) => {
      const { username, email, password, confirmPassword } = args;
      console.log("checking___-----", args);
      try {
        const user = await User.create({
          username,
          email,
          password
        });
        return user;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
