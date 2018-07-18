import getAllUsers from './services/user-service';

const resolvers = {
  Query: {
    users(root, args) {
      return getAllUsers();
    },
    user(root, args) {
      return getAllUsers().then(users => {
        return users.find(o => args.email === o.email)
      });
    }
  }
};

export default resolvers;
