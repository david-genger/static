const API = require('static-api-generator');

const api = new API({
  addIdToFiles: true,
  blueprint: 'source/:lan/:car',
  outputPath: 'output',
  // pluralise: true,
});

api.generate({
  endpoints: ['car'],
});
