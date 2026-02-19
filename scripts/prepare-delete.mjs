
import fs from 'fs';

try {
    const servicesData = fs.readFileSync('services-list.json', 'utf16le');
    const services = JSON.parse(servicesData);

    const ndjson = services.map(service => JSON.stringify({ delete: { id: service._id } })).join('\n');

    fs.writeFileSync('sanity-import/delete-services.ndjson', ndjson);
    console.log(`Prepared ${services.length} delete mutations.`);
} catch (err) {
    console.error("Error preparing delete:", err);
    // If file references fail, we might want to skip or handle gracefully.
    // Assuming services-list.json was created by sanity query.
}
