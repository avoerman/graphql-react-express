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
