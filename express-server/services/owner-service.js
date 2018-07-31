const fs = require('fs');

module.exports.getAllOwners = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/owners.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const parsed = JSON.parse(data);
      resolve(parsed);
    });
  });
};
