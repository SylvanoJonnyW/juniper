const user = [
  {
    img: '/stacy-testimonial.png',
    id: 'stcy38',
    name: 'Stacy',
    age: 38,
    weightLoss: 22,
    monthLoss: 4.5,
    description:
      "Since Juniper I feel freedom. I've gone from always thinking about food, to seeing it as fuel.",
  },
  {
    img: '/rebekah-testimonial.png',
    id: 'rebkah27',
    name: 'Rebekah',
    age: 27,
    weightLoss: 17,
    monthLoss: 3.5,
    description:
      'I finally feel confident in my own skin. I feel pretty, and it feels great.',
  },
  {
    img: '/jo-testimonial.png',
    id: 'jo52',
    name: 'Jo',
    age: 52,
    weightLoss: 12,
    monthLoss: 3,
    description: "I cannot believe how much better I feel. I'm amazed.",
  },
  {
    img: '/tiffani-testimonial.png',
    id: 'tiff52',
    name: 'Tiffani',
    age: 52,
    weightLoss: 13,
    monthLoss: 3.5,
    description:
      "I'm still on my journey, but this time I know I'll make it to the finish line.",
  },
];

const post = [
  {
    id: 'nvwoine12934NKSAckl',
    img: '/juniper-medication-product.png',
    heading: 'Breakthrough medication',
    title: 'Lowers appetite and improves metabolic function',
    to: 'medication-blog',
  },
  {
    id: '09jkdvbwejpt3qcqwef',
    img: '/juniper-tracking-indicator.svg',
    heading: 'Health tracking',
    title: 'Measure your biometric health improvements',
    to: 'health-tracking-blog',
  },
  {
    id: '02dikc4023gsv3t312vx',
    img: '/juniper-community.png',
    heading: 'Private community',
    title: 'Celebrate successes and keep each other motivated',
    to: 'juniper-private-comunity',
  },
  {
    id: '20mcph923bkalckp2hjtr2',
    img: '/juniper-coaching.png',
    heading: 'Lifestyle coaching',
    title: 'Set the sustainable habits necessary for lifelong results',
    to: 'lifestyle-coaching',
  },
];

const profile = [
  {
    img: '/Dr-Ramy-Bishay.png',
    position: 'Endocrinologist',
    name: 'Dr Ramy Bishay',
    level: 'BSc (Hons), MSc (Hons), MBBS (Hons), FRACP',
  },
  {
    img: '/Dr-Matthew-Vickers.png',
    position: 'Specialist GP',
    name: 'Dr Matthew Vickers',
    level: 'MBBS, FRACGP',
  },
  {
    img: '/Leif-Lagesen.png',
    position: 'Health Coach',
    name: 'Leif Lagesen',
    level: 'APD, BSND (Hons), BSportExM',
  },
  {
    img: '/Amelia-Bandera.png',
    position: 'Dietian',
    name: 'Amelia Bandera',
    level: 'APD, Bex&NutrSci, MNutr&Diet',
  },
];

const quizPost = {
  title: 'The Weight Reset Program',
  p1: 'The Weight Reset Program includes a clinically proven treatment that targets metabolism and overhauls hunger signals to help average patients',
  p2: "When combined with lifestyle changes, it's considered the an effective method for long-term weight loss in average patients.",
};

const navigation = [
  {
    link: 'Weight Loss',
    direct: 'juniper-weight-loss-program',
  },
  {
    link: 'Medication',
    direct: 'juniper-medication-promo',
  },
  {
    link: 'Nourish Shakes',
    direct: 'nourish-shakes',
  },
  {
    link: 'Reviews',
    direct: 'juniper-product-reviews',
  },
  {
    link: 'FAQ',
    direct: 'faq',
  },
  {
    link: 'Health Coaching',
    direct: 'juniper-health-coaching-program',
  },
  {
    link: 'BMI Calculator',
    direct: 'bmi-calculator',
  },
  {
    link: 'Learn',
    direct: 'learn-more-about-juniper-weightloss-program',
  },
];

const rating = [
  {
    id: 'nio351nvc135ncdi23',
    title: 'Very happy with my weight loss',
    description:
      "I'm really glad I took the leap and did this for myself, highly recommend you to try it out if you're on the fence.",
  },
  {
    id: '29chjrg3h34b20xj336t',
    title: 'I am loving the Juniper Program',
    description:
      'I am loving the Juniper program, finally I have found something that actually helps me lose weight. In the first couple of weeks i have lost 4 kilos. Support is great too.',
  },
  {
    id: '120cj4533inasnqitribs',
    title: 'I wish I found this program earlier',
    description:
      "The support is so much better than my regular GP. I can't wait to receive my welcome package and start my journey through Juniper.",
  },
  {
    id: '19u4cmeuw3ur12xnmbg2jkkq',
    title: 'Really greatful to have found this',
    description:
      'I had done my research and I am very happy with the service and product. It is working great for me.',
  },
];

const question = [
  {
    title:
      'What medications are available with Juniper? Are they approved in Australia?',
    description:
      "Juniper offers a range of medications, but it's essential to check their approval status in Australia. Always consult with a healthcare professional for personalized advice.",
  },
  {
    title: "Why doesn't Juniper mention medications by name?",
    description:
      'Juniper prioritizes privacy and confidentiality. While we provide information about medications, we avoid specific names to protect our user privacy.',
  },
  {
    title: 'How does pricing on Juniper work?',
    description:
      "Juniper's pricing model varies based on individual needs. Factors like consultationm medication type, and duration influence the cost. Consult with Juniper directly for accurate pricing details.",
  },
  {
    title: 'Is Juniper covered by health insurance?',
    description:
      "Juniper's coverage depends on the specific health insurance plan. It's advisable to verify with your provider company to determine if Juniper services are covered.",
  },
  {
    title: 'What happens during the quiz and practitioner consultation?',
    description:
      'During the quiz, Juniper gathers relevant health information. In practitioner consultation, a licensed professional reviews your case and recommends personalized solutions.',
  },
  {
    title: "Will I experience side effects on Juniper's medications?",
    description:
      'Side effect can vary based on individual responses. Juniper provides information about potential side effects, but consult with a healthcare provider for personalized guidance',
  },
];

const footerLink = [
  {
    title: 'About',
    direct: 'about',
  },
  {
    title: 'Patient Safety',
    direct: 'patient-safety',
  },
  {
    title: 'Privacy Policy',
    direct: 'privacy-policy',
  },
  {
    title: 'Terms & Conditions',
    direct: 'terms-conditions',
  },
  {
    title: 'Help Centre',
    direct: 'help-centre',
  },
  {
    title: 'Contact Us',
    direct: 'contact-us',
  },
  {
    title: 'Zip',
    direct: 'zip',
  },
  {
    title: 'Weight Loss Motivation',
    direct: 'weight-loss-motivation',
  },
];

export { user, post, profile, quizPost, navigation, rating, question, footerLink };
