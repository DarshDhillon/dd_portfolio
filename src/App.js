import ContextProvider from './context/ContextProvider';
import GlobalStyle from './utils/GlobalStyle';
import Header from './components/Header/Header';
import BackgroundTintWrapper from './components/BackgroundTintWrapper/BackgroundTintWrapper';
import About from './components/About/About';
import TechnologiesBar from './components/TechnologiesBar/TechnologiesBar';
import Projects from './components/ProjectsShowcase/Projects';
import LearningTechs from './components/LearningTechs/LearningTechs';
import ContactBox from './components/ContactBox/ContactBox';
import Footer from './components/Footer/Footer';
import MobileMenu from './components/MobileMenu/MobileMenu';

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <BackgroundTintWrapper>
        <Header />
        <MobileMenu />
        <About />
        <TechnologiesBar />
        <Projects />
        <LearningTechs />
        <ContactBox />
        <Footer />
      </BackgroundTintWrapper>
    </ContextProvider>
  );
};

export default App;
