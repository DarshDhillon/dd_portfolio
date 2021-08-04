import testGif from '../assets/images/test_gif_1.gif';

const projectData = [
  {
    id: 1,
    projectTitle: 'happyhealth',
    projectGallery: testGif,
    projectDescription:
      'A health-orientated website including recipe finder, meditation app and mock store',
    projectHighlights: [
      'React',
      'Context API',
      'Custom Hooks',
      'Styled Components',
    ],
    projectLiveURL: 'http://www.google.com',
    projectGithubURL: 'http://www.github.com',
    reverseStyling: false,
  },
  {
    id: 2,
    projectTitle: 'Vaccine Booker',
    projectGallery: testGif,
    projectDescription: 'A COVID19 vaccine booking app',
    projectHighlights: [
      'React',
      'Redux state',
      'Google Maps integration',
      'Firebase authentication with Firestore',
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
    reverseStyling: true,
  },
  {
    id: 3,
    projectTitle: 'Film Finder',
    projectGallery: testGif,
    projectDescription: 'A film searching app ',
    projectHighlights: [
      'React',
      'Redux Toolkit with async middleware',
      'Fuck knows',
      'Dnamic pagination',
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
    reverseStyling: false,
  },
  {
    id: 4,
    projectTitle: '24hr Weather Chart',
    projectGallery: testGif,
    projectDescription:
      'A chart app illustrating previous 24hr weather temperatures ',
    projectHighlights: [
      'React',
      'Chart rendering with chartjs',
      'Reverse geolocation lookup',
      'SCSS',
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
    reverseStyling: true,
  },
];
export default projectData;
