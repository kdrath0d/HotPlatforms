export interface Platform {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string[];
  dateAdded: string;
  pairsWith: string[];
  tutorials: {
    title: string;
    url: string;
  }[];
}

export const platforms: Platform[] = [
  {
    id: 'nextjs',
    title: 'Next.js',
    description: 'The React Framework for Production',
    longDescription: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    image: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/showcase/nextjs-logo.png',
    category: ['Framework', 'React'],
    dateAdded: '2024-03-15',
    pairsWith: ['TailwindCSS', 'Prisma', 'Vercel'],
    tutorials: [
      {
        title: 'Next.js Crash Course 2024',
        url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA'
      }
    ]
  },
  {
    id: 'astro',
    title: 'Astro',
    description: 'The web framework for content-driven websites',
    longDescription: 'Astro is an all-in-one web framework for building fast, content-focused websites. Pull your content from anywhere and deploy everywhere, all powered by your favorite UI components and libraries.',
    image: 'https://astro.build/assets/press/full-logo-light.svg',
    category: ['Framework', 'Static Site'],
    dateAdded: '2024-03-14',
    pairsWith: ['TailwindCSS', 'React', 'Vue'],
    tutorials: [
      {
        title: 'Astro JS Crash Course',
        url: 'https://www.youtube.com/watch?v=e1zHcxpYvVw'
      }
    ]
  },
  {
    id: 'remix',
    title: 'Remix',
    description: 'Full stack web framework that lets you focus on the user interface',
    longDescription: 'Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience.',
    image: 'https://remix.run/img/og.1.jpg',
    category: ['Framework', 'Full Stack'],
    dateAdded: '2024-03-13',
    pairsWith: ['TailwindCSS', 'Prisma', 'Fly.io'],
    tutorials: [
      {
        title: 'Remix Crash Course',
        url: 'https://www.youtube.com/watch?v=d_BhzHVV4aQ'
      }
    ]
  }
].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());