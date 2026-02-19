import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'hdx7hgqq',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
    apiVersion: '2024-02-03',
});

const deleteAllServices = async () => {
    try {
        console.log('Fetching all service documents...');
        const services = await client.fetch('*[_type == "service"]{_id}');

        if (services.length === 0) {
            console.log('No service documents found.');
            return;
        }

        console.log(`Found ${services.length} service documents. Deleting...`);

        const transaction = client.transaction();
        services.forEach(service => {
            transaction.delete(service._id);
        });

        await transaction.commit();
        console.log('✅ Successfully deleted all service documents.');
    } catch (error) {
        console.error('❌ Error deleting documents:', error);
    }
};

deleteAllServices();
