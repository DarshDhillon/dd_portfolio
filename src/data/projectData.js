import hh1 from '../assets/videos/hh1.mp4';
import hh2 from '../assets/videos/hh2.mp4';

import ff1 from '../assets/videos/ff1.mp4';
import ff2 from '../assets/videos/ff2.mp4';

import charts1 from '../assets/videos/charts1.mp4';
import charts2 from '../assets/videos/charts2.mp4';

import vac1 from '../assets/videos/vac1.mp4';
import vac2 from '../assets/videos/vac2.mp4';

const projectData = [
  {
    id: 1,
    projectTitle: 'happyhealth',
    projectGalleryDesktop: hh1,
    projectGalleryResponsive: hh2,
    projectDescription:
      'A health-orientated website including meal finder, meditation app and mock store',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Context API state management' },
      { id: 3, highlight: 'Custom hooks' },
      { id: 4, highlight: 'Framer Motion animations' },
    ],
    projectLiveURL: 'http://www.google.com',
    projectGithubURL: 'https://github.com/DarshDhillon/happyhealth',
  },
  {
    id: 2,
    projectTitle: 'Vaccine Booker',
    projectGalleryDesktop: vac1,
    projectGalleryResponsive: vac2,
    projectDescription:
      'A COVID19 vaccine appointment booking app with user authentication',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Redux state management' },
      { id: 3, highlight: 'Google Maps integration' },
      { id: 4, highlight: 'Firebase authentication with Firestore' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'https://github.com/DarshDhillon/vaccine_shn',
  },
  {
    id: 3,
    projectTitle: 'FilmFinder',
    projectGalleryDesktop: ff1,
    projectGalleryResponsive: ff2,
    projectDescription:
      'A film database app featuring a search facility and photo reel/actor galleries ',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Redux Toolkit with async middleware' },
      { id: 3, highlight: 'Programmatical React router routing' },
      { id: 4, highlight: 'Styled Components CSS-in-JS' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'https://github.com/DarshDhillon/film_finder',
  },
  {
    id: 4,
    projectTitle: '24hr Weather Chart',
    projectGalleryDesktop: charts1,
    projectGalleryResponsive: charts2,
    projectDescription: `A chart app illustrating weather temperatures for major global cities or the user's location`,
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Chart rendering with chart.js' },
      { id: 3, highlight: 'Reverse geocoding lookup' },
      { id: 4, highlight: 'SASS' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'https://github.com/DarshDhillon/weather_chart',
  },
];
export default projectData;
