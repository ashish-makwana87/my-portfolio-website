import { nanoid } from "nanoid"; 


export const skills: string[] = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Prisma ORM",
  "Javascript",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
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
    title: "Lifestyle Photography Website",
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
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1754927506/w4_ynir8n.jpg",
    title: "Consultancy Services Website",
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
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017323/w7_vri2vh.jpg",
    title: "Healthcare Recruitment Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.recmasters.in/",
  },
 
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343914/w30_dsbqvj.jpg",
    title: "Career Consultancy Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.mercury.coach/",
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
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343235/w25_bhpfsw.jpg",
    title: "Freight Services Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.caxtonfreight.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755342707/w23_wypnyv.jpg",
    title: "Luxury Hair Salon Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.hairbarponca.com/about",
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
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017792/w12_cogskp.jpg",
    title: "Flooring Specialist Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.hm-flooring.co.uk/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343648/w29_ybukg8.jpg",
    title: "Real Estate Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.ritiproperties.com/",
  },
  
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017792/w14_z7uaga.jpg",
    title: "Brand Consultation Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.brandbase.ca/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017793/w13_l8ox3t.jpg",
    title: "LGBTQIAP Center Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.himachalqueerfoundation.org/",
  },

  
{
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343648/w28_s4ynud.jpg",
    title: "NGO School Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.gamruvillageschool.in/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343649/w27_c20gbq.jpg",
    title: "Construction Services Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.nswsports.com.au/",
  },
 
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343649/w26_k8n4g2.jpg",
    title: "Construction Services Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.volson.in/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017792/w11_gaecss.jpg",
    title: "Personal Financing Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.creditlinks.in/",
  },


  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755343915/w31_kuf62h.jpg",
    title: "Spiritual Consultation Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.yashfoundation.info/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017323/w10_ilfbzn.jpg",
    title: "Healthcare Solution Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://sgpdcentre.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755342706/w20_ijwghq.jpg",
    title: "Personal Blog Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.sanspaper.in/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755342706/w21_gurosm.jpg",
    title: "Life Coaching Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.theboldnesscoach.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344375/w34_eip9bw.jpg",
    title: "NGO Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.pratima.net/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344413/w37_du58vt.jpg",
    title: "Travel Blogger Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.joinedatthetriptours.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755342706/w24_qtpwee.jpg",
    title: "Spiritual Guide Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.manachristiantherapy.com/",
  },
  
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755017795/w15_cg81ma.jpg",
    title: "Housing Construction Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.mparkhomes.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344413/w39_e78ouf.jpg",
    title: "Wellness Products Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.modernwellnesscanada.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344374/w32_yjsteg.jpg",
    title: "IT Solutions Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.nits.co/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344377/w33_ueq8h7.jpg",
    title: "Industrial Products Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.jptcores.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344394/w35_ts007u.jpg",
    title: "IT Solutions Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.mscyrigo.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344414/w36_rn2d6d.jpg",
    title: "Nutrition Services Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.gingerspicehealth.com/",
  },

  {
    id: nanoid(),
    img: "https://res.cloudinary.com/ddulynvdq/image/upload/v1755344412/w38_fck7xt.jpg",
    title: "Healthcare Products Website",
    skills: [
      "Wix"
    ],
    github: null,
    url: "https://www.airbender.com.tw/",
  },
];

