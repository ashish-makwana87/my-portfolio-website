import { nanoid } from "nanoid"; 


export const skills: string[] = [
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Prisma ORM",
  "MongoDB",
  "TypeScript",
  "Javascript",
  "Tailwind CSS",
  "Redux.js",
];

type ProjectSkills = "Next.js" | "React" | "Javascript" | "Node" | "Express" | "Clerk Auth" | "Prisma" | "MongoDB" | "Supabase" |"Zod" |"TypeScript" | "Shadcn" | "Tailwind CSS" | "Mongoose" | "Express-validator" | "Bcrypt" | "JWT" | "React" |"React-router" | "Vite" | "React-pdftotext" | "Framer motion" | "GitHub Copilot" | "Cursor" | "GraphQL" | "Apollo client" | "Recharts" | "Wix" | "WordPress" | "Elementor"; 

type ProjectsData = {
  id: string;
  img: string;
  title: string;
  skills: ProjectSkills[];
  github: string | null;
  url: string;
};


export const projectsData: ProjectsData[] = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754916510/2_property_omulla.jpg",
    title: "Next.js Property Rental Project",
    skills: [
      "Next.js",
      "Clerk Auth",
      "Prisma",
      "MongoDB",
      "Supabase",
      "Zod",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
    ],
    github:
      "https://github.com/ashish-makwana87/nextjs-property-rental-project",
    url: "https://nextjs-property-rental-project.vercel.app/",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754916510/1_job_bnbpuo.jpg",
    title: "MERN REST API Job Portal Project",
    skills: [
      "Node",
      "Express",
      "Mongoose",
      "MongoDB",
      "Express-validator",
      "Bcrypt",
      "JWT",
      "React",
      "React-router",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/ashish-makwana87/mern-rest-api-job-portal-app",
    url: "https://mern-job-app-vercel-v2.vercel.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754917674/4_larysa_egy0go.jpg",
    title: "Photography Website",
    skills: [
      "Framer motion",
       "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
    ],
    github:"/private-repo",
    url: "https://www.larysaphotography.com/",
  },
  
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754917675/3_ecomm_axfzrq.jpg",
    title: "Next.js E-commerce Store Project",
    skills: [
      "Next.js",
      "Clerk Auth",
      "Prisma",
      "MongoDB",
      "Zod",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
    ],
    github:
      "https://github.com/ashish-makwana87/nextjs-ecommerce-store-project",
    url: "https://nextjs-ecommerce-store-project-peach.vercel.app/",
  },
  
 {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754920531/5_graphql_he8zdh.jpg",
    title: "GraphQL - Search GitHub users project",
    skills: [
      "GraphQL",
      "Apollo client",
      "React",
      "Recharts",
    ],
    github: 'https://github.com/ashish-makwana87/graphql-search-github-users-project',
    url: "https://graphql-search-github-users-project.netlify.app/",
  },
  
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754921809/6_pdf-text_kwtc45.jpg",
    title: "PDF to Text Extract App",
    skills: [
      "React-pdftotext",
      "Tailwind CSS",
      "TypeScript"
    ],
    github: 'https://github.com/ashish-makwana87/nextjs-pdf-to-text-extract',
    url: "https://nextjs-pdf-to-text-extract.vercel.app/",
  },

 {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754922559/7_data_to_chart_dwkg1g.jpg",
    title: "GitHub Copilot - Data To Chart",
    skills: [
      "GitHub Copilot", "Javascript"
    ],
    github: 'https://github.com/ashish-makwana87/github-copilot-ai-project',
    url: "https://github-copilot-data-to-chart.netlify.app/",
  },

 {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925258/r1-unsplash_foer5s.jpg",
    title: "Unsplash API Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-unsplash-api-project',
    url: "https://react-unsplash-api-project-1111.netlify.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925788/r5_vhryky.jpg",
    title: "Hero Carousel/Slider Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-responsive-hero-carousel-project',
    url: "https://hero-slider-carousel.netlify.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925255/r2_wy8ip6.jpg",
    title: "Shopping Cart Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-shopping-cart-project',
    url: "https://react-shopping-cart-project-1111.netlify.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925258/r3_lqua2x.jpg",
    title: "Mega-Menu Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-mega-menu-project',
    url: "https://react-mega-menu-1111.netlify.app/",
  },

 {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925255/r4_jy1jma.jpg",
    title: "Grocery List Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-grocery-list-project',
    url: "https://react-grocery-list-1111.netlify.app/",
  },
 
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925785/r6_ztaw6w.jpg",
    title: "Sidebar Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-sidebar-project',
    url: "https://react-sidebar-project-1111.netlify.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925786/r7_na8dzg.jpg",
    title: "Cafe Menu Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-cafe-menu-project',
    url: "https://react-cafe-menu-1111.netlify.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754925785/r8_aynikm.jpg",
    title: "Accordion/FAQs Project",
    skills: [
      "React", 'Vite'
    ],
    github: 'https://github.com/ashish-makwana87/react-accordion-project',
    url: "https://react-accordion-project-1111.netlify.app/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754926122/r9_oelnmb.jpg",
    title: "Tabs Project",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/react-tabs-project',
    url: "https://react-tabs-project-1111.netlify.app/",
  },
 
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754926126/r10_fmfanc.jpg",
    title: "Responsive Hero Grid",
    skills: [
      "React", "Vite"
    ],
    github: 'https://github.com/ashish-makwana87/css-responsive-hero-grid',
    url: "https://responsive-hero-cssgrid.netlify.app/",
  },
 
 
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754926717/p1_uxx00k.jpg",
    title: "Video Editing Portfolio Website",
    skills: [
       "WordPress", "Elementor"
    ],
    github: null,
    url: "https://carthel.media/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754926719/p2_zldwbi.jpg",
    title: "Co-working Space Website",
    skills: [
      "WordPress", "Elementor"
    ],
    github: null,
    url: "https://scaleneworleans.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754926719/p3_a4uodp.jpg",
    title: "Real Estate Website",
    skills: [
      "WordPress", "Elementor"
    ],
    github: null,
    url: "https://alimrealestate.com/",
  },


  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754927503/w1_yv79ns.jpg",
    title: "Burger Outlet Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.tbfc.co/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754927506/w4_ynir8n.jpg",
    title: "Consultancy Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.appreal-global.com/",
  },


  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754927506/w5_lh4mji.jpg",
    title: "Medical Services Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.renalhealthservices.org/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754927819/w6_hhzf8l.jpg",
    title: "Investment Management Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.guardianassetmanagement.in/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754927505/w2_rvculu.jpg",
    title: "Wellness/Healthcare Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.amikuhealth.com/ ",
  },

  {
    id: nanoid(),
    img: "/",
    title: "test",
    skills: [
      "React",
    ],
    github: null,
    url: "/",
  },

];

