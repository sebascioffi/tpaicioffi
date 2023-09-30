import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sebastian Cioffi CV',
  description: "Example site built with Sebastian Cioffi's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'sobre mi',
  Contact: 'contacto',
  Portfolio: 'portafolio',
  Resume: 'resumen',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'aptitudes',
  Login:"acceder"
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sebastián Cioffi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Estudio Tecnicatura Universitaria en Desarrollo de Software en UADE, Capital Federal Argentina. He desarrollado diversos proyectos tanto
        grupales como individuales con tecnologias como <strong>Python</strong>, <strong>Java</strong>, <strong>React</strong>, y muchos otros.
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        <strong>Teléfono</strong>: +54 11 2501-2807
      </p>
    </>
  ),
  actions: [
    
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Mi objetivo es desarrollarme profesional y personalmente, con intenciones de seguir aprendiendo de manera
  constante en la parte técnica y social.`,
  aboutItems: [
    {label: 'Ubicación', text: 'Capital Federal', Icon: MapIcon},
    {label: 'Edad', text: '20', Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Argentina', Icon: FlagIcon},
    {label: 'Intereses', text: 'Informática, programación', Icon: SparklesIcon},
    {label: 'Estudio', text: 'Universidad Argentina de la Empresa (UADE)', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Idiomas',
    skills: [
      {
        name: 'Español',
        level: 10,
      },
      {
        name: 'Inglés',
        level: 8,
      }
    ],
  },
  {
    name: 'Tecnologías Frontend',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Bootstrap',
        level: 8,
      },
    ],
  },
  {
    name: 'Tecnologías Backend',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      }
    ],
  },
  {
    name: 'Tecnologías Mobile',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 7,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sitio web Peliculas',
    description: 'Página que permite la búsqueda de películas, entre otras cosas.',
    url: 'https://sebascioffi.github.io/cineforum/index.html',
    image: porfolioImage1,
  },
  {
    title: 'Sitio web E-Commerce',
    description: 'Simulación de una página web de un restaurante de Hamburguesas',
    url: 'https://sebascioffi.github.io/WebBootstrap/',
    image: porfolioImage2,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Marzo 2021 - Presente',
    location: 'Capital Federal',
    title: 'Tecnicatura Universitaria en Desarrollo de Software',
    content: <p>Materias restantes para finalizar: 7. Lenguajes de programación vistos: Python, Java, Javascript, React, SQL.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Tengo la capacidad de desarrollar soluciones eficientes a problemas, con atención al detalle.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Tengo la intención de seguir aprendiendo de manera constante',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Puedo analizar eficientemente información técnica y me puedo coordinar de manera correcta en un trabajo en equipo.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contacto',
  description: 'Mi Información',
  items: [
    {
      type: ContactType.Email,
      text: 'sebacioffi12@gmail.com',
      href: 'https://gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Capital Federal, Argentina',
      href: 'https://www.google.ca/maps/',
    },
    {
      type: ContactType.Github,
      text: 'sebascioffi',
      href: 'https://github.com/sebascioffi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sebascioffi'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sebasti%C3%A1n-cioffi-b56586239/'},
];
