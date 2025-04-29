import {mobile,backend,creator,web,javascript,typescript,html,css,reactjs,redux,tailwind,nodejs,mongodb,git,figma,docker,situsamc,clayton,easybay,pizzatime,speedymeals,threejs} from "../assets";
import kimberlyaugust from "../assets/testimonials/kimberlyaugust.png";
import darrenpalladino from "../assets/testimonials/darrenpalladino.png";
import neilhinch from "../assets/testimonials/neilhinch.png";

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
    title: "Content Creator",
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
    title: "CRE Compliance Underwriter (Remote)",
    company_name: "SitusAMC",
    icon: situsamc,
    iconBg: "#383E56",
    date: "April 2016 - April 2024",
    points: [
      "Conducted detailed financial modeling and variance analysis of borrower portfolios and tax documents (1040s, 1120s, 1065s), contributing to risk-adjusted decision-making and improved forecasting accuracy.",
      "Reviewed complex loan products for compliance with QM, TRID, HARP, FHA, VA, FNMA, FHLMC, USDA, Non-QM, and HECM standards, identifying gaps and potential fraud indicators.",
      "Monitored fraud trends across a $100B+ real estate portfolio, using Excel dashboards to flag anomalies and enhance internal oversight.",
      "Partnered with product and audit teams to build automated workflows that improved the speed and accuracy of compliance reviews.",
      "Assessed creditworthiness and financial risk, reducing fraud and minimizing losses through detailed analysis of financial data.",
      "Supported compliance-driven budget initiatives by validating expenses, identifying redundant workflows, and streamlining cost-heavy processes.",
    ],
  },

  {
    title: "QC Default Foreclosure Analyst (Remote)",
    company_name: "Clayton Holdings, LLC",
    icon: clayton,
    iconBg: "#E6DEDD",
    date: "August 2011 - July 2013",
    points: [
      "Audited mortgage assignments, title transfers, and defaulted loans to verify accuracy, reduce exposure, and meet OCC and investor standards.",
      "Identified and escalated Robo-signing and documentation inconsistencies, ensuring remediation aligned with Consent Order guidelines.",
      "Analyzed large datasets related to default servicing activity to detect discrepancies, verify financial compliance, and support risk mitigation.",
      "Developed standardized audit templates for complex scenarios including bankruptcy timelines, modification packages, and court filings.",
      "Collaborated with cross-functional teams to resolve audit findings and implement corrective action plans, enhancing internal controls and ensuring timely regulatory compliance.",
      "Trained 30+ new analysts on tools and techniques for accurate financial reporting and issue escalation.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Wow Crystal! This is amazing! Nicely Done!",
    name: "Kimberly August",
    designation: "COO",
    company: "August Mortgage Corporation",
    image: kimberlyaugust,

  },
  {
    testimonial: "Good Job!",
    name: "Neil Hinch",
    designation: "Senior Mortgage Examiner, Lead Compliance Analyst ",
    company: "Clayton Holdings, LLC",
    image: neilhinch,

  },
  {
    testimonial: "Great Work!",
    name: "Darren Palladino",
    designation: "AVP, Business Operations ",
    company: "SitusAMC",
    image: darrenpalladino,

  },
];

const projects = [
  {
    name: "Plant Store | Web Design",
    description:
      "Store where individuals may purchase succulent plants. Developed application implementing mouse over picture using CSS, to see different plants to purchase. Created pop-up for user to accept cookies to retain user data.",

    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Web-Fundamentals",
        color: "green-text-gradient",
      },
      {
        name: "Cookies",
        color: "pink-text-gradient",
      },
    ],
    image: easybay,
    source_code_link:
      "https://github.com/CrystalW11/Crystal-s-Technical-Projects/blob/main/EasyBay.zip",
  },
  {
    name: "Pizza Time | Full Stack Developer | Group Collaboration",
    description:
      "(Group Project) A place where people can create their own pizza to order and have it delivered or carry-out. Created and implemented login registration using foreign key and many-to-many relationship database tables using Bootstrap, Bcrypt, MySQL, Flask, HTTPS methods. Implemented GPS API, hidden input, and form, modularize using models & controllers, Jinja, and Emmet for delivery location.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pizzatime,
    source_code_link: "https://github.com/DriftingShade/Pizza-Time",
  },
  {
    name: "Speedy Meals | Full Stack Developer",
    description:
      "Social platform for fast meals made in under 30 minutes to share with others. Developed application implementing CRUD, Atlas MongoDB, Mongoose cluster to store meal collections using Bootstrap, form, modularizing using models & controllers, Axios API, Express, React Library and Node.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap & CSS",
        color: "pink-text-gradient",
      },
    ],
    image: speedymeals,
    source_code_link:
      "https://github.com/CrystalW11/Crystal-s-Technical-Projects/blob/main/speedy-meals.zip",
  },
];

export { services, technologies, experiences, testimonials, projects };
