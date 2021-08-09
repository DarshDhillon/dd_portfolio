import ffVideo from '../assets/videos/DD_PORT_FF_PREVIEW2.mp4';
import vacVideo from '../assets/videos/DD_PORT_VAC_PREVIEW.mp4';

const projectData = [
  {
    id: 1,
    projectTitle: 'happyhealth',
    projectGallery: ffVideo,
    projectDescription:
      'A health-orientated website including recipe finder, meditation app and mock store',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Context API' },
      { id: 3, highlight: 'Custom hooks' },
      { id: 4, highlight: 'Styled Components' },
    ],
    projectLiveURL: 'http://www.google.com',
    projectGithubURL: 'http://www.github.com',
  },
  {
    id: 2,
    projectTitle: 'Vaccine Booker',
    projectGallery: ffVideo,
    projectDescription:
      'A COVID19 vaccine appointment booking app with user authentication',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Redux state management' },
      { id: 3, highlight: 'Google Maps integration' },
      { id: 4, highlight: 'Firebase authentication with Firestore' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
  },
  {
    id: 3,
    projectTitle: 'Film Finder',
    projectGallery: ffVideo,
    projectDescription:
      'A film database app featuring photo reel and actor galleries, and search facility ',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Redux Toolkit with async middleware' },
      { id: 3, highlight: 'Programmatical routing with React router' },
      { id: 4, highlight: 'Pagination get requests' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
  },
  {
    id: 4,
    projectTitle: '24hr Weather Chart',
    projectGallery: ffVideo,
    projectDescription: `A chart app illustrating weather temperatures for major global cities or the user's location`,
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Chart rendering with chart.js' },
      { id: 3, highlight: 'Reverse geocoding lookup' },
      { id: 4, highlight: 'SASS' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
  },
];
export default projectData;
