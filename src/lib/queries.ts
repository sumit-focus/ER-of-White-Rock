export const landingPageQuery = `*[_type == "landingPage"][0]{
  title,
  content[]{
    ...,
    _type == "physiciansSection" => {
      ...,
      physicians[]->
    },
    _type == "servicesSection" => {
      ...,
      services[]->
    },
    _type == "testimonialsSection" => {
      ...,
      testimonials[]->
    },
    _type == "faqSection" => {
      ...,
      faqs[]->
    }
  }
}`;
