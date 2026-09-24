// Personal details and profile links are kept here for easy updates.
export const siteConfig = {
  name: 'Kyaw Thura Hein',
  handle: 'Ikkyuu',
  email: 'eikyuu124@gmail.com',
  githubUrl: 'https://github.com/ikkyuu-san',
  linkedinName: 'Ei Kyuu',
  linkedinUrl: '', // Add the exact profile URL when available.
}

export const aboutText = [
  'I enjoy turning ideas into useful websites and applications. I started with frontend development and gradually became interested in complete web systems, including backend logic, databases, APIs, authentication, and deployment.',
  'I now focus on full-stack development and improve my skills through practical projects, including e-commerce platforms, booking systems, business websites, and admin tools. I use AI-assisted tools to explore solutions, debug, and work more efficiently while staying responsible for the code I build.',
]

export const strengths = [
  'Fast learner with strong focus',
  'Problem solving',
  'Teamwork',
  'Continuous learning',
]

// Add a future project by copying an object in this array. Omit URLs until verified.
export const projects = [
  {
    id: 'gearlab-store',
    title: 'GearLab Store',
    label: 'Flagship project',
    description:
      'GearLab Store is a full-stack e-commerce website built for an IT and gaming accessories business. It allows customers to browse products, place preorder orders, use guest checkout, and track their orders securely. The admin can manage products, inventory, orders, and payment status.',
    highlights: [
      'Product and image management',
      'Preorder and inventory management',
      'Guest cart and checkout',
      'Secure order tracking',
      'Admin dashboard and order management',
      'Responsive design and deployment',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js', 'Upstash Redis', 'Vercel'],
    images: [
      '/images/gearlab/gearlab-home.png',
      '/images/gearlab/gearlab-featured-products.png',
      '/images/gearlab/gearlab-categories.png',
      '/images/gearlab/gearlab-preorder-about.png',
      '/images/gearlab/gearlab-footer.png',
    ],
    liveUrl: 'https://gearlab-store.vercel.app/',
    githubUrl: 'https://github.com/ikkyuu-san/gearlab-store',
  },
  {
    id: 'restaurant-reservation',
    title: 'Restaurant Reservation Website',
    description:
      'A full-stack restaurant reservation application where customers can submit reservations and administrators can review and confirm booking requests.',
    highlights: [
      'Customer reservation workflow',
      'Database integration',
      'Protected admin management',
      'Responsive interface',
    ],
    technologies: ['React', 'Vite', 'Supabase'],
    images: [
      '/images/restautant/restaurant-project-1.jpg',
      '/images/restautant/restaurant-project-3.jpg',
      '/images/restautant/restaurant-project-5.jpg',
    ],
    liveUrl: 'https://restaurant-reservation-website-rmqn.vercel.app/',
    githubUrl: 'https://github.com/ikkyuu-san/Restaurant-Reservation-Website',
  },
  {
    id: 'baan-kaffee',
    title: 'Baan Kaffee',
    description:
      'A responsive frontend café website focused on clean presentation, usability, and responsive design across desktop and mobile devices.',
    highlights: ['Responsive frontend', 'Modern UI', 'Mobile-friendly design'],
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    images: [
      '/images/baan-kaffee/baan-kaffee-1.jpg',
      '/images/baan-kaffee/baan-kaffee-2.jpg',
      '/images/baan-kaffee/baan-kaffee-3.jpg',
    ],
    liveUrl: 'https://baan-kaffee.vercel.app/',
    githubUrl: 'https://github.com/ikkyuu-san/baan-kaffee',
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Website',
    description:
      'A responsive personal portfolio created to showcase development projects, technical skills, services, and professional information.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    images: [],
    liveUrl: 'https://developer-portfolio-six-gamma.vercel.app/',
    githubUrl: 'https://github.com/ikkyuu-san/Developer-portfolio',
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite'] },
  { title: 'Backend / Data', items: ['PostgreSQL', 'Prisma', 'Supabase', 'APIs'] },
  { title: 'Tools / Deployment', items: ['Git', 'GitHub', 'Vercel'] },
  { title: 'Workflow', items: ['Debugging', 'Version control', 'Deployment'] },
]

export const services = [
  {
    title: 'Business Websites',
    description: 'Professional responsive websites for small businesses and personal brands.',
  },
  {
    title: 'E-commerce Websites',
    description: 'Online storefronts and preorder systems with product and order workflows.',
  },
  {
    title: 'Booking / Reservation Systems',
    description: 'Web applications for appointments, bookings, and reservations.',
  },
  {
    title: 'Admin Dashboards',
    description: 'Management interfaces for products, orders, reservations, and business workflows.',
  },
  {
    title: 'Landing Pages',
    description: 'Responsive pages for products, businesses, campaigns, or services.',
  },
  {
    title: 'Website Redesign',
    description: 'Improving existing websites with better responsiveness, layout, usability, and presentation.',
  },
]

export const education = [
  { institution: 'Stamford International University', field: 'Information Technology' },
  { institution: 'KBTC', field: 'Information and Technology' },
]

export const qualifications = ['NCC Level 4 Diploma in Computing', 'NCC Level 3 Foundation']

export const developmentExperience = [
  'Personal full-stack projects',
  'University project experience',
  'NCC Level 4 project experience',
  'Database-backed web applications',
  'Git and GitHub workflows',
  'Production deployment',
]
