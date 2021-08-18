import HappyHealthPreviewVideo from '../assets/videos/DD-PORT_HH_PREVIEW1.mp4';
import FilmFinderPreviewVideo from '../assets/videos/DD-PORT_FF_1.mp4';
import TempChartPreviewVideo from '../assets/videos/DD-PORT_TEMP_CHARTS2.mp4';
import VaccinePreviewVideo from '../assets/videos/DD-PORT_VAC_BOOK1.mp4';

import ChartResponsiveBg from '../assets/videos/CHART_RESPONSIVE_BG.mp4';
import HHResponsiveBg from '../assets/videos/DD-PORT_HH_RESPONSIVE1.mp4';
import FFResponsiveBG from '../assets/videos/DD-PORT_FF_RESPONSIVE.mp4';
import VaccineResponsiveBg from '../assets/videos/DD-PORT_VAC_RESPONSIVE1.mp4';

const projectData = [
  {
    id: 1,
    projectTitle: 'happyhealth',
    projectGalleryDesktop: HappyHealthPreviewVideo,
    projectGalleryResponsive: HHResponsiveBg,
    projectDescription:
      'A health-orientated website including meal finder, meditation app and mock store',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Context API state management' },
      { id: 3, highlight: 'Custom hooks' },
      { id: 4, highlight: 'Framer Motion animations' },
    ],
    projectLiveURL: 'http://www.google.com',
    projectGithubURL: 'http://www.github.com',
  },
  {
    id: 2,
    projectTitle: 'Vaccine Booker',
    projectGalleryDesktop: VaccinePreviewVideo,
    projectGalleryResponsive: VaccineResponsiveBg,
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
    projectGalleryDesktop: FilmFinderPreviewVideo,
    projectGalleryResponsive: FFResponsiveBG,
    projectDescription:
      'A film database app featuring a search facility and photo reel/actor galleries ',
    projectHighlights: [
      { id: 1, highlight: 'React (functional components with hooks)' },
      { id: 2, highlight: 'Redux Toolkit with async middleware' },
      { id: 3, highlight: 'Programmatical React router routing' },
      { id: 4, highlight: 'Styled Components CSS-in-JS' },
    ],
    projectLiveURL: 'http://www.bbc.com',
    projectGithubURL: 'http://www.sky.com',
  },
  {
    id: 4,
    projectTitle: '24hr Weather Chart',
    projectGalleryDesktop: TempChartPreviewVideo,
    projectGalleryResponsive: ChartResponsiveBg,
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
