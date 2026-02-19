
const fs = require('fs');

const services = require('./services-list.json');

const ndjson = services.map(service => JSON.stringify({ delete: { id: service._id } })).join('\n');

fs.writeFileSync('sanity-import/delete-services.ndjson', ndjson);
console.log(`Prepared ${services.length} delete mutations.`);
