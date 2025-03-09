export const navLinks = {
  'sp': [
    { title: 'Inicio', path: "#home" },
    { title: "Sobre mí", path: "#about" },
    { title: "Proyectos", path: "#projects" },
    { title: "Contacto", path: "#contact" },
  ],
  'en': [
    { title: 'Home', path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ],
}

export const categories = ["All", "Web", "Backend"];

export const arrayOptions = ["skills", "education"];

export const data = {
  'sp': {
    name: 'Hola, soy',
    info: 'Desarrollador web de 📍Argentina. Entusiasta de las tecnologías web emergentes y actualizado con las tendencias de la industria. Apasionado, proactivo, autodidacta, especializado en crear experiencias digitales excepcionales.',
    btnHire: 'Contrátame',
    btnDownload: 'Descargar CV',
    titleAboutMe: 'Sobre mí',
    textAboutMe: 'Con más de 5 años de experiencia, he desarrollado sitios con las mejores prácticas utilizando herramientas Frontend y Backend, priorizando el buen desempeño. Cuando no estoy frente a la computadora, suelo estar dibujando o aprendiendo música 🎶.',
    optionsAboutMe: [ 'Herramientas', 'Educación' ],
    titleProjects: 'Mis Projectos',
    titleContact: 'Conectémonos',
    textContact: 'Actualmente estoy buscando nuevas oportunidades. Mi bandeja de entrada siempre está abierta. Si tienes alguna pregunta o simplemente quieres saludarme, haré todo lo posible por responderte.',
    textFooter: `® ${new Date().getFullYear()} Todos los derechos reservados.`,
  },
  'en': {
    name: "Hello, I'm",
    info: 'Web developer from 📍Argentina. Enthusiast of emerging web technologies and up to date with industry trends. Passionate, proactive, self-taught, specialized in creating exceptional digital experiences.',
    btnHire: 'Hire me',
    btnDownload: 'Download CV',
    titleAboutMe: 'About Me',
    textAboutMe: "With more than 5 years of experience, I have developed sites with best practices using Frontend and backend tools, prioritizing good performance. When I'm not at the computer, I'm usually drawing or learning music 🎶.",
    optionsAboutMe: [ 'Skills', 'Education' ],
    titleProjects: 'My Projects',
    titleContact: "Let's Connect",
    textContact: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    textFooter: `® ${new Date().getFullYear()} All rights reserved.`,
  },
};

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "asdasdasdasdasd ",
    image: "https://picsum.photos/200",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lgimenez-code/portfolio",
    previewUrl: "https://lgimenez.vercel.app/",
  },
  {
    id: 2,
    title: "Weater App",
    description: "asdasdasd",
    image: "https://picsum.photos/300",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lgimenez-code/app_weather",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Crypto App",
    description: "Project 3 decription",
    image: "https://picsum.photos/502",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lgimenez-code/crypto-quoter",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "https://picsum.photos/620",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "https://github.com/lgimenez-code/scraper",
  },
  {
    id: 5,
    title: "Full-stack Roadmap",
    description: "Project 5 decription",
    image: "https://picsum.photos/630",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Calculator",
    description: "Project 6 decription",
    image: "https://picsum.photos/657",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
