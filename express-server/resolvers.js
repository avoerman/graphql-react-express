import { getAllPlayers, draftPlayer } from './services/player-service';
import { getAllOwners } from './services/owner-service';

const resolvers = {
  Query: {
    player(root, args) {
      return getAllPlayers().then(players => {
        return players.find(p => args.id === p.id);
      });
    },
    players(root, args) {
      const onlyFreeAgents = args.freeAgents;
      return onlyFreeAgents ? getAllPlayers().then(players => players.filter(p => !p.ownerId)) : getAllPlayers();
    },
    owner(root, args) {
      return getAllOwners().then(owners => owners.find(o => args.id === o.id));
    },
    owners(root, args) {
      return getAllOwners();
    }
  },
  Player: {
    owner(player) {
      return getAllOwners().then(owners => owners.find(o => o.id === player.ownerId));
    }
  },
  Owner: {
    players(owner) {
      return getAllPlayers().then(players => players.filter(p => p.ownerId === owner.id));
    }
  },
  Mutation: {
    draft: (root, args) => {
      return draftPlayer(args.ownerId, args.playerId).then(res => res);
    }
  }
};

export default resolvers;
