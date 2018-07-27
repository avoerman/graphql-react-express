import * as fs from 'fs';

export function getAllPlayers() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/players.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const parsed = JSON.parse(data);
      resolve(parsed);
    });
  });
}

export function draftPlayer(ownerId, playerId) {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/players.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const playersData = JSON.parse(data);
      updateOwnerFromFile({ resolve, reject, playersData, ownerId, playerId });
    });
  });
}

function updateOwnerFromFile({ resolve, reject, playersData, ownerId, playerId }) {
  const playersAfterDrafted = playersData.map(
    player => (player.id === playerId ? Object.assign(player, { ownerId }) : player)
  );

  fs.writeFile('./data/players.json', JSON.stringify(playersAfterDrafted), err => {
    if (err) {
      reject(err);
    }

    resolve(true);
  });
}
