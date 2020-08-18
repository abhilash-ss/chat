module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: "Abhilash",
          email: "abhilas@MediaList.com"
        },
        {
          username: "user1",
          email: "user1@mail.com"
        }
      ];
      return users;
    }
  }
};
