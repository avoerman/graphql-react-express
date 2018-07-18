import fs from 'fs';

export default function getAllUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const parsed = JSON.parse(data);
      resolve(parsed);
    });
  });
}
