import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize client
const client = createClient({
    projectId: 'hdx7hgqq',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_TOKEN, // Requires auth
    apiVersion: '2024-02-03',
});

async function main() {
    try {
        const siteDataPath = path.join(__dirname, '../src/data/siteData.json');
        console.log(`📖 Reading data from: ${siteDataPath}`);

        if (!fs.existsSync(siteDataPath)) {
            throw new Error("siteData.json not found");
        }

        const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

        console.log('📦 Starting data import...');

        // 1. Create Services
        console.log('🔹 Creating Services...');
        const serviceIds = [];
        if (siteData.services) {
            for (const [index, s] of siteData.services.entries()) {
                const doc = {
                    _type: 'service',
                    title: s.title,
                    description: s.description,
                    icon: s.icon,
                    order: index
                };

                const id = `service-${s.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                const created = await client.createOrReplace({ ...doc, _id: id });
                console.log(`   ✅ Service: ${created.title}`);
                serviceIds.push({ _type: 'reference', _ref: created._id, _key: created._id });
            }
        }

        // 2. Prepare Sections
        // Hero
        const heroSection = {
            _type: 'hero',
            headline: siteData.hero?.title || "NO WAIT. EXPERT CARE.",
            headlineHighlight: "White Rock",
            subtitle: siteData.hero?.subtitle,
            ctaText: siteData.hero?.ctaText,
            ctaLink: siteData.hero?.ctaLink,
        };

        // Features -> Why Choose
        const whyChooseSection = {
            _type: 'whyChooseSection',
            title: 'Why Choose Us?',
            features: siteData.features ? siteData.features.map(f => ({
                _key: (f.title + f.label).replace(/[^a-zA-Z0-9]/g, ''),
                title: f.label,
                description: f.desc,
                icon: 'check_circle'
            })) : []
        };

        // Comparison Table (Robust Defaults)
        const comparisonTable = {
            _type: 'comparisonTable',
            title: 'ER of White Rock vs. Urgent Care',
            erFeatures: [
                "Open 24/7/365",
                "Board-Certified ER Physicians",
                "Full Advanced Imaging (CT, Ultrasound, X-Ray)",
                "COLA-Certified Laboratory",
                "Life-Saving Care (Heart Attacks, Trauma)"
            ],
            urgentCareFeatures: [
                "Limited Hours",
                "Mid-Level Providers",
                "Basic Capabilities",
                "No Advanced Imaging",
                "Not for Emergencies"
            ]
        };

        // Services Section
        const servicesSection = {
            _type: 'servicesSection',
            title: 'Our Comprehensive Services',
            services: serviceIds
        };

        // 3. Create Landing Page
        console.log('🔹 Creating Landing Page (ID: landingPage)...');
        const landingPage = {
            _id: 'landingPage',
            _type: 'landingPage',
            title: 'Home',
            content: [
                heroSection,
                { _type: 'trustBadges', badges: [] }, // Filter features for this?
                servicesSection,
                comparisonTable,
                whyChooseSection,
                { _type: 'communitySection', neighborhoods: ['White Rock', 'Lakewood', 'Lake Highlands'] }
            ]
        };

        const createdPage = await client.createOrReplace(landingPage);
        console.log(`✅ Landing Page updated! Title: ${createdPage.title}`);

        console.log('\n✨ Import sequence complete!');
    } catch (err) {
        console.error('❌ Error seeding data:', err.message);
        if (err.message.includes('401')) {
            console.error('👉 Tip: Ensure you have a valid SANITY_TOKEN environment variable set.');
        }
        process.exit(1);
    }
}

main();
