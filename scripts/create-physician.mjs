import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'hdx7hgqq',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
    apiVersion: '2024-02-03',
});

const doc = {
    _id: "physician-sarah-bennett",
    _type: "physician",
    name: "Dr. Sarah Bennett",
    jobTitle: "Medical Director",
    bio: "Dr. Bennett is a Board-Certified Emergency Physician with over 15 years of experience in trauma and critical care.",
    headshot: {
        _type: "image",
        asset: {
            _type: "reference",
            // Using a placeholder image or existing if known. 
            // Ideally we upload one, but for now we create the doc without asset or use a known one.
            // Let's omit the asset if we don't have an ID, or try to upload?
            // For now, let's just leave headshot empty or with a placeholder reference if we had one.
            // User script `generate-services.js` uses `image-...` placeholders.
            // We will skip the asset for now to avoid errors, or use a known image ID if available.
        }
    }
};

const createPhysician = async () => {
    try {
        await client.createOrReplace(doc);
        console.log(`✅ Created/Updated physician: ${doc.name}`);
    } catch (error) {
        console.error('❌ Error creating physician:', error);
    }
};

createPhysician();
