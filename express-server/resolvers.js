const { getAllOwners } = require('./services/owner-service');
const { draftPlayer, getAllPlayers } = require('./services/player-service');

const resolvers = {
  Query: {
    owners: () => {
      return getAllOwners();
    },
    owner: (root, args) => {
      return getAllOwners().then(owners => owners.find(o => args.id === o.id));
    },
    players: (root, args) => {
      const freeAgents = args.freeAgents;
      return freeAgents
        ? getAllPlayers().then(players => players.filter(p => !p.ownerId))
        : getAllPlayers();
    },
    player: (root, args) => {
      return getAllPlayers().then(players =>
        players.find(p => p.id === args.id)
      );
    }
  },
  Mutation: {
    draft(root, args) {
      return draftPlayer(args.ownerId, args.playerId);
    }
  },
  Owner: {
    players(owner) {
      return getAllPlayers().then(players =>
        players.filter(p => p.ownerId === owner.id)
      );
    }
  },
  Player: {
    owner(player) {
      return getAllOwners().then(owners =>
        owners.find(o => o.id === player.ownerId)
      );
    }
  }
};

module.exports = { resolvers };
