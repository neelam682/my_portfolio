import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  carrent,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Copy Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: docker,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Quantum-AI Interface Developer",
  company_name: "",
  icon: mongodb,
  iconBg: "#E6DEDD",
  date: "Jan 2025 - Future",
  points: [
    "Building intelligent frontends using React.js, Three.js, and advanced visualization tools to make quantum and AI concepts intuitive for real users.",
    "Collaborating closely with cross-functional teams to prototype and ship interactive tools for energy, autonomy, and learning.",
    "Integrating GPT-based systems to simplify complex processes like smart form filling, dynamic roadmaps, and user-personalized interfaces.",
    "Designing with purpose — ensuring interfaces are minimal, accessible, and future-proof, even on low-resource devices.",
    "Working at the edge of innovation: fusing physics, code, and creativity into tools that solve real-world challenges."
  ],
},

  {
  title: "Frontend Developer | AI & 3D Integration",
  company_name: "Independent Developer",
  icon: html, // Replace with a relevant icon or your personal logo
  iconBg: "#DCEEFF",
  date: "Oct 2023 – Present",
  points: [
    "Engineered modern web interfaces using React.js, Tailwind CSS, and Vite, with a focus on performance and responsive design.",
    "Developed intelligent applications powered by GPT APIs, including AutoForm AI — a smart assistant for auto-filling professional forms.",
    "Integrated Three.js and @react-three/fiber to deliver immersive 3D experiences and interactive visual components.",
    "Built secure and scalable backend infrastructure using Firebase, handling user authentication, data storage, and dynamic content delivery.",
    "Delivered end-to-end product solutions — from concept to deployment — with strong attention to user experience and technical architecture.",
  ],
},

  {
    title: "Full stack Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Designed and developed modern web applications using React, Tailwind CSS, and Vite for fast, responsive user interfaces.",
    "Integrated GPT-based APIs to create intelligent tools like AutoForm AI — a smart assistant that auto-fills rental, visa, and job forms.",
    "Built custom 3D UI elements using Three.js and @react-three/fiber, focusing on performance, interactivity, and clean design.",
    "Managed user authentication, Firestore database structures, and real-time data handling with Firebase.",
    "Created scalable architectures and component libraries for rapid prototyping and future-proof development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Neelam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Neelam was a game-changer for our car rental platform. She brought not only deep technical expertise in React and full-stack development, but also a rare ability to understand real user needs and translate them into smooth, functional design. Her code is clean, her problem-solving is sharp, and she always takes initiative to improve things beyond expectations. She’s a fast learner, a focused builder, and genuinely cares about delivering high-quality, scalable results. Any team would be lucky to have her.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CEO",
    company: "Personal Brand",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
