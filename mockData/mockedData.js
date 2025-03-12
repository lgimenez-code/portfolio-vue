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

export const categories = ["All", "Frontend", "Backend"];

export const arrayOptions = ["skills", "education"];

export const data = {
  'sp': {
    name: 'Hola, soy',
    info: 'Desarrollador web de 📍Argentina. Entusiasta de las tecnologías web emergentes y actualizado con las tendencias de la industria. Apasionado, proactivo, autodidacta, especializado en crear experiencias digitales excepcionales.',
    btnHire: 'Contrátame',
    btnDownload: 'Descargar CV',
    linkCv: 'https://drive.google.com/uc?export=download&id=1zXD4UdQeX_Q-iXz9AGrKb7aGuFEhbNo6',
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
    linkCv: 'https://drive.google.com/uc?export=download&id=1UETBSBI_Uvsw0uAhQ8ULCmQPiU7m86lN',
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
    title: "Kiano IA",
    description: 'chat project that uses Google "Gemini" IA to deliver fast and accurate responses. ',
    image: "https://picsum.photos/200",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/lgimenez-code/kianoIA",
    previewUrl: "https://kiano-ia.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description: "app to check the weather in a city",
    image: "https://picsum.photos/300",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/lgimenez-code/app_weather",
    previewUrl: "https://app-weather-indol.vercel.app/",
  },
  {
    id: 3,
    title: "Crypto App",
    description: "check the cryptocurrency quote",
    image: "https://picsum.photos/502",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/lgimenez-code/crypto-quoter",
    previewUrl: "https://crypto-quoter-rho.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Developer",
    description: "a developer portfolio where you can meet the programmer and view some projects.",
    image: "https://picsum.photos/620",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/lgimenez-code/portfolio-vue",
    previewUrl: "...",
  },
  {
    id: 5,
    title: "Scraper App",
    description: "Project 5 decription",
    image: "https://picsum.photos/630",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/lgimenez-code/scraper",
    previewUrl: "",
  },
];
