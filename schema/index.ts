import hero from './hero';
import service from './service';
import settings from './settings';
import physician from './physician';
import testimonial from './testimonial';
import faq from './faq';
import landingPage from './landingPage';
import {
    trustBadges, insuranceBar, aboutSection, physiciansSection,
    servicesSection, comparisonTable, whenToCome, processSection,
    testimonialsSection, communitySection, faqSection, ctaSection, whyChooseSection
} from './sections';

export const schemaTypes = [
    // Documents
    landingPage,
    hero,
    service,
    settings,
    physician,
    testimonial,
    faq,
    // Objects
    trustBadges,
    insuranceBar,
    aboutSection,
    physiciansSection,
    servicesSection,
    comparisonTable,
    whenToCome,
    processSection,
    testimonialsSection,
    communitySection,
    faqSection,
    ctaSection,
    whyChooseSection
];
