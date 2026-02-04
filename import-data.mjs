import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
    projectId: 'hdx7hgqq',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_TOKEN || '', // You'll need to add your token
    apiVersion: '2024-02-03',
});

async function importData() {
    try {
        const dataPath = path.join(__dirname, 'sanity-import', 'data.ndjson');
        const data = fs.readFileSync(dataPath, 'utf-8');
        const lines = data.trim().split('\n');

        console.log(`📦 Found ${lines.length} documents to import...`);

        for (const line of lines) {
            const doc = JSON.parse(line);
            console.log(`Importing ${doc._type}: ${doc._id || 'new document'}`);

            try {
                await client.createOrReplace(doc);
                console.log(`✅ Imported ${doc._type}`);
            } catch (err) {
                console.error(`❌ Failed to import ${doc._type}:`, err.message);
            }
        }

        console.log('\n✨ Import complete!');
    } catch (error) {
        console.error('Error importing data:', error);
        process.exit(1);
    }
}

importData();
