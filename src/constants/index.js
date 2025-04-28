import {mobile,backend,creator,web,javascript,typescript,html,css,reactjs,redux,tailwind,nodejs,mongodb,git,figma,docker,situsamc,clayton,easybay,pizzatime,speedymeals,threejs} from "../assets";
import kimberlyaugust from "../assets/testimonials/kimberlyaugust.png";
import darrenpalladino from "../assets/testimonials/darrenpalladino.png";

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
      "Performed comprehensive compliance reviews for AUS/LPA submissions, DU Findings, and manual underwrites, maintaining 99.8% accuracy across QM and Non-QM processes, leveraging automated scripts (e.g., Python) for data validation. Audited 20+ loan products, including FNMA, FHA, VA, USDA, and HECM, to uncover adverse findings. Executed risk monitoring audits on accounts payable/receivable to ensure proper fund usage.",
      "Conducted risk analysis and portfolio assessment on 20+ loan products (FNMA, FHA, USDA, Non-QM, HECM), utilizing SQL queries to extract data and custom algorithms for identifying adverse findings and compliance risks. Conducted credit risk and fraud risk analytics in securitizations to identify high-risk loans and enhance portfolio safety.",
      "Analyzed borrower creditworthiness and financial records, using JavaScript tools to automate data collection from multiple sources, improving accuracy and speed in evaluating predatory lending risks. Managed a $100B+ CRE portfolio, ensuring compliance and performance for Silicon Valley securitizations.",
      "Monitored and validated $100B+ in CRE portfolios, integrating real-time data dashboards built in React to improve the monitoring of loan performance and escalate potential defaults. Leveraged expertise in real estate, due diligence, and capital markets across diverse property sectors.",
      "Executed transaction verification and asset validation during securitization reviews, applying custom-built tools to streamline the identification of high-risk loans and mitigate fraud risks. Demonstrated advanced critical thinking, risk analysis, and independent resolution skills.",
      "Streamlined fraud detection protocols and enhanced BSA/AML compliance frameworks, developing automated reporting tools to identify red flags and generate compliance alerts.",
      "Developed and implemented data integrity checks within securitization processes, utilizing React for front-end reporting and SQL for back-end data analysis, ensuring accurate financial analysis and performance monitoring of real estate portfolios.",
    ],
  },

  {
    title: "QC Default Foreclosure Analyst (Remote)",
    company_name: "Clayton Holdings, LLC",
    icon: clayton,
    iconBg: "#E6DEDD",
    date: "August 2011 - July 2013",
    points: [
      "Conducted detailed risk assessments and audits of defaulted loans, modification workouts, and servicing records, ensuring all documentation met regulatory compliance and program guidelines through Appian software reporting to clients and OCC.",
      "Performed quality control audits for judicial and non-judicial foreclosures, modifications, and bankruptcies, identifying robo-signing practices and addressing issues under the Consent Order to ensure compliance with regulatory audits.",
      "Validated mortgage assignments using Fidelity, LPS Desktop, Vendor Scape, and MERS, ensuring document validation in line with compliance regulations and securing accurate reporting for loan transfers.",
      "Utilized advanced Excel functions (pivot tables, VLOOKUP, and formulas) to analyze large data sets, conducting root cause analysis for discrepancies and optimizing reporting efficiency.",
      "Developed templates for auditing bankruptcy payments, judgments, motions for relief, and complaints, ensuring policy adherence and identifying adverse fees to prevent financial risks under OCC guidance.",
      "Collaborated with cross-functional teams to resolve audit findings and implement corrective action plans, enhancing internal controls and ensuring timely regulatory compliance.",
      "Conducted thorough due diligence on foreclosure and bankruptcy cases, identifying potential risks and ensuring full transaction verification to comply with operational compliance requirements and legal reviews under the Consent Order.",
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
    name: "Plant Store",
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
    name: "Pizza Time",
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
    name: "Speedy Meals",
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
