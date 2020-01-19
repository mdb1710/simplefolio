import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Code By MDB | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to the Dev porfolio of Michael D Bonner', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: ' Michael Bonner',
  subtitle: `I'm your Friendly Neighborhood Code Composer`,
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'codephoto.jpeg',
  paragraphOne: `After a career of promoting other people's creations I am branching
            out as a web developer to create and promote some of my own.I am
            currently in the Thinkful Engineering Immersion Bootcamp to help
            fulfill this goal.I've always been too curious for my own good and
            now I'm using my skills for four main purposes:`,
  paragraphTwo: `Compose code and apps to make new things work.`,
  paragraphThree: 'Optimize current apps to make good things work better.',
  paragraphFour: 'Develop new toys to help accomplish the first two goals',
  paragraphFive: 'Experience the world inside & outside of the screen.',
  resume:
    'https://docs.google.com/document/d/1x_QPqVH9anpTv2GjgB2oHX0Op0fZVshdSWJJPnoGNfU/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'tunechainsearch.png',
    title: 'Tunechain',
    info: 'A full stack app to search Spotify playlists by your current mood & genre',
    info2: 'Tech stack: React, Node/Express, PostgreSQL and Spotify Web API',
    url: '',
    repo: 'https://github.com/mdb1710/tunechainclient_final', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'spendfuldashboard.png',
    title: 'Spendful',
    info: `With four other collaborators I was able to
          tackle the ever enduring problem of saving money.This is a full- stack
          app that allows you to track incomes and expenses`,
    info2: `Project Tech: Front-End: ReactJS, HTML, CSS, ChartJS, Moment -
          Back- End: Node, Express, Joi - Database - PostgreSQL`,
    url: 'http://spendful.now.sh',
    repo: 'https://github.com/mdb1710/spendful-client', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'CodeComposerShot.png',
    title: 'Code Composer Blog',
    info: 'A blog about music technology & my journey in code',
    info2: `Project Tech: VueJs, AWS S3`,
    url: 'https://codecomposer.tech',
    repo: 'https://github.com/mdb1710/vueportfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Want to know more about my projects? Let me know`,
  btn: 'Contact Me',
  email: 'codebymdb@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/codebymdb',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://instagram.com/codebymdb',
    },
    {
      id: uuidv1(),
      name: 'facebook',
      url: 'https://facebook.com/codebymdb',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/michael-d-bonner',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/mdb1710',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
