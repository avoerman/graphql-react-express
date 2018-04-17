import { players, owners } from "./mock-data";

const resolvers = {
  Query: {
    player(root, args) {
      return players.find(p => args.id === p.id);
    },
    players(root, args) {
      return players;
    },
    owner(root, args) {
      return owners.find(o => args.id === o.id);
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
