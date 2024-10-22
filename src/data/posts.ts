export interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  views: number;
  imageUrl: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Introducción a React",
    description: "Aprende los conceptos básicos de React y cómo crear tu primera aplicación.",
    date: "2024-03-15",
    views: 1500,
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Mejores prácticas en CSS",
    description: "Descubre cómo escribir CSS limpio y mantenible para tus proyectos web.",
    date: "2024-03-10",
    views: 1200,
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "TypeScript vs JavaScript",
    description: "Comparación detallada entre TypeScript y JavaScript: ventajas y desventajas.",
    date: "2024-03-05",
    views: 2000,
    imageUrl: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Optimización de rendimiento web",
    description: "Técnicas avanzadas para mejorar la velocidad y el rendimiento de tu sitio web.",
    date: "2024-02-28",
    views: 1800,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Introducción a GraphQL",
    description: "Descubre cómo GraphQL puede mejorar la eficiencia de tus APIs.",
    date: "2024-02-20",
    views: 1600,
    imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

export const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
};