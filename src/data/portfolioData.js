// EDIT YOUR PERSONAL DETAILS AND LINKS HERE.
export const siteConfig = {
  name: 'Ikkyuu',
  email: 'eikyuu124@gmail.com',
  githubUrl: 'https://github.com/ikkyuu-san',
}

export const aboutText =
  "I'm an IT student and aspiring web developer focused on building modern, responsive web applications. I work with technologies such as React, Supabase, Git, and Vercel, while using modern AI-assisted development tools to improve my workflow. I'm continuously developing my skills in APIs, backend development, and building real-world applications."

// Add future projects by copying one object in this array.
export const projects = [
  {
    id: 'restaurant-reservation',
    title: 'Restaurant Reservation Website',
    description:
      'A modern restaurant reservation web application with an online booking experience, database integration, and a protected admin dashboard for managing reservations.',
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
      'A refined café website that presents the brand story, food and coffee menu, café atmosphere, and essential visit information through a warm, editorial design.',
    technologies: ['Responsive Design', 'Café Website', 'Editorial UI'],
    images: [
      '/images/baan-kaffee/baan-kaffee-1.jpg',
      '/images/baan-kaffee/baan-kaffee-2.jpg',
      '/images/baan-kaffee/baan-kaffee-3.jpg',
    ],
    liveUrl: 'https://baan-kaffee.vercel.app/',
    githubUrl: 'https://github.com/ikkyuu-san/baan-kaffee',
  },
]

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vite',
  'Supabase',
  'Git',
  'GitHub',
  'Vercel',
]

export const services = [
  {
    title: 'Business Websites',
    description: 'Clear, professional websites that help small businesses explain what they offer and connect with customers.',
  },
  {
    title: 'Responsive Web Design',
    description: 'Layouts built to look polished and remain easy to use across phones, tablets, and desktop screens.',
  },
  {
    title: 'Reservation / Booking Websites',
    description: 'Straightforward booking experiences that make it easier for customers to request or arrange a visit.',
  },
  {
    title: 'Admin Dashboards',
    description: 'Practical interfaces that organize important information and make everyday management tasks clearer.',
  },
  {
    title: 'Website Deployment',
    description: 'Support preparing a finished frontend project for a reliable, production-ready web deployment.',
  },
]
