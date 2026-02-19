
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicesList } from './services-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to slugify
const slugify = (text) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const generateNDJSON = () => {
    let ndjsonOutput = '';

    const physicianDoc = {
        _id: "physician-sarah-bennett",
        _type: "physician",
        name: "Dr. Sarah Bennett",
        jobTitle: "Medical Director",
        bio: "Dr. Bennett is a Board-Certified Emergency Physician with over 15 years of experience in trauma and critical care.",
        headshot: {
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "image-9f0c2243d526786c556E63593358055a40878516-411x523-png" // Using a dummy placeholder or omitting if invalid
            }
        }
        // Omit asset if we don't have a valid one, or use a known one. 
        // Let's omit asset for now to be safe, or just keep the structure without asset reference if it validates.
    };
    // Actually, let's remove the asset reference to avoid validation error if that ID doesn't exist.
    delete physicianDoc.headshot;

    ndjsonOutput += JSON.stringify(physicianDoc) + '\n';

    servicesList.forEach(service => {
        const slug = `${slugify(service.title)}-white-rock-tx`;
        const idBase = slugify(service.title);

        // 1. FAQ Documents
        const faqIds = [];
        const faqs = [
            { q: `When should I prefer ER over Urgent Care for ${service.condition}?`, a: `If you have severe symptoms like ${service.symptoms[0].toLowerCase()} or ${service.symptoms[1].toLowerCase()}, our ER in White Rock provides the advanced diagnostics and board-certified care required, which most urgent cares cannot offer.` },
            { q: `Do you accept insurance for ${service.condition}?`, a: "Yes, we accept most major private insurance plans and honor in-network benefits for emergency visits under Texas law." },
            { q: "What are the wait times?", a: "We prioritize low wait times. Most patients are placed in a private room immediately upon arrival at our Dallas facility." }
        ];

        faqs.forEach((faq, idx) => {
            const faqId = `faq-${idBase}-${idx}`;
            faqIds.push(faqId);
            const faqDoc = {
                _id: faqId,
                _type: 'faq',
                question: faq.q,
                answer: faq.a,
                isLocal: idx === 2 // Wait time is local
            };
            ndjsonOutput += JSON.stringify(faqDoc) + '\n';
        });

        // 2. Service Document
        const serviceDoc = {
            _id: `service-${idBase}`,
            _type: 'service',
            title: service.title,
            title: service.title,
            slug: { _type: 'slug', current: slug },
            category: service.category,
            description: service.description,
            metaDescription: `Expert ${service.title} in White Rock, Dallas. 24/7 Emergency Room with no wait times. Board-certified physicians and advanced diagnostics.`,
            medicalReviewer: { _type: "reference", _ref: "physician-sarah-bennett" },
            icon: service.icon,
            hero: {
                headline: "24/7 Emergency Care for",
                headlineHighlight: service.condition,
                subtitle: `Don't wait when it comes to your health. Get immediate, expert ${service.condition} care at our White Rock facility using advanced diagnostics.`,
                ctaText: "Get Directions",
                ctaLink: "https://maps.google.com/?q=10705+Northwest+Hwy,+Dallas,+TX+75238"
            },
            content: [
                {
                    _type: "trustBadges",
                    badges: [
                        { title: "Open 24/7/365", icon: "schedule" },
                        { title: "No Wait Times", icon: "timer_off" },
                        { title: "Board Certified", icon: "verified_user" }
                    ]
                },
                {
                    _type: "whenToCome",
                    sectionTitle: `When to Visit the ER for ${service.condition}`,
                    sectionSubtitle: "Seek immediate care if you experience:",
                    conditions: service.symptoms.map(sym => ({
                        condition: sym,
                        icon: "warning"
                    }))
                },
                {
                    _type: "comparisonTable",
                    title: "ER vs. Urgent Care",
                    erFeatures: ["Open 24/7/365", "Board-Certified ER Physicians", "CT Scan & Ultrasound", "Life-Saving Equipment"],
                    urgentCareFeatures: ["Limited Hours", "Nurse Practitioners", "X-Ray Only", "Basic First Aid"]
                },
                {
                    _type: "mapSection",
                    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.551787869688!2d-96.72145392358896!3d32.870233678519965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea1a7f051608d%3A0x8e82a628864d4d6e!2s10705%20Northwest%20Hwy%2C%20Dallas%2C%20TX%2075238!5e0!3m2!1sen!2sus!4v1707680000000!5m2!1sen!2sus"
                },
                {
                    _type: "insuranceBar",
                    title: "We Accept Most Major Private Insurance",
                    subtitle: "Focus on your health, not the paperwork. We handle the billing for you."
                },
                {
                    _type: "testimonialsSection",
                    title: "Patient Stories from White Rock",
                    testimonials: [
                        { author: "Sarah M.", text: `I came to ER of White Rock for ${service.condition.toLowerCase()} and was seen immediately. The staff was incredible.`, rating: 5, location: "Dallas, TX" },
                        { author: "Michael T.", text: "Best ER experience I've ever had. Clean facility, kind nurses, and zero wait time.", rating: 5, location: "White Rock" },
                        { author: "Jessica L.", text: "Thankful for the quick diagnosis and treatment. Highly recommend this local ER.", rating: 5, location: "Lakewood" }
                    ]
                },
                {
                    _type: "whyChooseSection",
                    title: "Advanced Emergency Capabilities in Dallas",
                    features: [
                        { title: "Board-Certified Experts", description: "Our physicians are specialists in emergency medicine.", icon: "medical_services" },
                        { title: "On-Site Lab & Imaging", description: "Results in minutes, not days.", icon: "biotech" },
                        { title: "Private Rooms", description: "Comfortable, private acute care rooms.", icon: "meeting_room" }
                    ]
                },
                {
                    _type: "richTextSection",
                    title: `About Our ${service.title} Services`,
                    content: [
                        {
                            _type: "block",
                            style: "normal",
                            children: [{ _type: "span", text: `At ER of White Rock, we provide comprehensive ${service.title} for the Dallas community with a focus on speed, accuracy, and patient comfort. Our facility on Northwest Hwy is equipped to handle complex cases of ${service.condition} that require immediate intervention.` }]
                        },
                        {
                            _type: "block",
                            style: "h3",
                            children: [{ _type: "span", text: "Why Time Matters" }]
                        },
                        {
                            _type: "block",
                            style: "normal",
                            children: [{ _type: "span", text: "Delaying treatment for severe symptoms can lead to complications. Our streamlined triage ensures you see a doctor faster than traditional hospital ERs in North Texas." }]
                        }
                    ]
                },
                {
                    _type: "processSection",
                    title: "Your Patient Journey",
                    steps: [
                        { title: "Arrival", description: "Check in and get moved to a private room instantly.", icon: "login" },
                        { title: "Evaluation", description: "Exam by a Board-Certified ER Physician.", icon: "stethoscope" },
                        { title: "Treatment", description: "IV fluids, medication, or procedures as needed.", icon: "healing" }
                    ]
                },
                {
                    _type: "communitySection",
                    title: "Serving the White Rock Community",
                    subtitle: "We are proud to be your local emergency room, dedicated to the health and safety of our neighbors."
                },
                {
                    _type: "stickyCTA",
                    callNowText: "Call Now",
                    callNowNumber: "469-943-2939",
                    directionsText: "Get Directions",
                    directionsLink: "https://maps.google.com/?q=10705+Northwest+Hwy,+Dallas,+TX+75238"
                },
                {
                    _type: "ctaSection",
                    title: "Visit Us Today",
                    text: "Open 24/7 at 10705 Northwest Hwy, Dallas, TX 75238",
                    buttonText: "Call Now",
                    buttonLink: "tel:4699432939"
                },
                {
                    _type: "faqSection",
                    title: "Common Questions",
                    faqs: faqIds.map(id => ({ _type: "reference", _ref: id }))
                }
            ]
        };

        ndjsonOutput += JSON.stringify(serviceDoc) + '\n';
    });

    // Write to sanity-import folder
    const outputPath = path.join(__dirname, '..', 'sanity-import', 'services-batch.ndjson');
    fs.writeFileSync(outputPath, ndjsonOutput);
    console.log(`✅ Generated batch data at ${outputPath}`);
};

generateNDJSON();
