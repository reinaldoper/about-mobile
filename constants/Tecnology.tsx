export const tecnologys = [
  {
    id: 1,
    titulo: 'React',
    descricao: 'Biblioteca JavaScript para construção de interfaces de usuário.',
    src: "https://img.icons8.com/color/96/react-native.png",
  },
  {
    id: 2,
    titulo: 'JavaScript',
    descricao: 'Linguagem de programação para desenvolvimento web e mobile.',
    src: "https://img.icons8.com/color/96/javascript.png",
  },
  {
    id: 3,
    titulo: 'Redux',
    descricao: 'Biblioteca para gerenciamento de estado em aplicações JavaScript.',
    src: "https://img.icons8.com/color/96/redux.png",
  },
  {
    id: 4,
    titulo: 'MySQL',
    descricao: 'Sistema de gerenciamento de banco de dados relacional.',
    src: "https://img.icons8.com/fluency/96/mysql-logo.png",
  },
  {
    id: 5,
    titulo: 'Git',
    descricao: 'Sistema de controle de versão distribuído.',
    src: "https://img.icons8.com/color/96/git.png",
  },
  {
    id: 6,
    titulo: 'HTML5',
    descricao: 'Linguagem de marcação para estruturação de páginas web.',
    src: "https://img.icons8.com/color/96/html-5--v1.png",
  },
  {
    id: 7,
    titulo: 'CSS3',
    descricao: 'Linguagem de estilo para design e layout de páginas web.',
    src: "https://img.icons8.com/color/96/css3.png",
  },
  {
    id: 8,
    titulo: 'Bootstrap',
    descricao: 'Framework CSS para desenvolvimento de interfaces responsivas.',
    src: "https://img.icons8.com/color/96/bootstrap.png",
  },
  {
    id: 9,
    titulo: 'Angular',
    descricao: 'Framework para construção de aplicações web dinâmicas.',
    src: 'https://img.icons8.com/color/96/angularjs.png',
  },
  {
    id: 10,
    titulo: 'NextJs',
    descricao: 'Framework React para renderização no lado do servidor.',
    src: 'https://img.icons8.com/fluency/96/nextjs.png',
  },
  {
    id: 11,
    titulo: 'NodeJS',
    descricao: 'Ambiente de execução JavaScript para backend.',
    src: "https://img.icons8.com/color/96/nodejs.png",
  },
  {
    id: 12,
    titulo: 'Express',
    descricao: 'Framework para construção de APIs em Node.js.',
    src: "https://img.icons8.com/color/96/express.png",
  },
  {
    id: 13,
    titulo: 'MongoDB',
    descricao: 'Banco de dados NoSQL orientado a documentos.',
    src: "https://img.icons8.com/color/96/mongodb.png",
  },
  {
    id: 14,
    titulo: 'Docker',
    descricao: 'Plataforma para criação e gerenciamento de containers.',
    src: "https://img.icons8.com/color/96/docker.png",
  },
  {
    id: 15,
    titulo: 'Sequelize',
    descricao: 'ORM para Node.js que facilita o uso de bancos de dados.',
    src: "https://raw.githubusercontent.com/sequelize/sequelize/master/docs/images/logo-small.png",
  },
  {
    id: 16,
    titulo: 'PHP',
    descricao: 'Linguagem de programação para desenvolvimento web com suporte ao framework Laravel.',
    src: 'https://img.icons8.com/officel/96/php-logo.png',
  },
  {
    id: 17,
    titulo: 'Java',
    descricao: 'Linguagem de programação com suporte ao framework Spring Boot.',
    src: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png',
  },
  {
    id: 18,
    titulo: 'Python',
    descricao: 'Linguagem de programação versátil para diversas aplicações.',
    src: 'https://img.icons8.com/color/96/python.png',
  },
  {
    id: 19,
    titulo: 'C#',
    descricao: 'Linguagem de programação com suporte ao framework .NET Core.',
    src: 'https://cdn-icons-png.flaticon.com/128/6132/6132221.png',
  },
  {
    id: 21,
    titulo: 'Firebase',
    descricao: 'Plataforma de backend como serviço para desenvolvimento de aplicativos.',
    src: 'https://img.icons8.com/color/96/firebase.png',
  },
];

export const techFrntend = tecnologys.filter((tech) => tech.id <= 10);
export const techBackend = tecnologys.filter((tech) => tech.id >= 11);
