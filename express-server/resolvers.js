import { players, owners } from './mock-data';


const resolvers = {
  Query: {
    players(root, args) {
      return players;
    },
    owners(root, args) {
      return owners;
    }
  },
  Player: {
    owner(player) {
      return owners.find(o => o.id === player.ownerId);
    }
  },
  Owner: {
    players(owner) {
      return players.filter(p => p.ownerId === owner.id);
    }
  }
};

export default resolvers;
