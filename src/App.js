import ContextProvider from './context/ContextProvider';
import GlobalStyle from './utils/GlobalStyle';
import Header from './components/Header/Header';
import BackgroundTintWrapper from './components/BackgroundTintWrapper/BackgroundTintWrapper';
import About from './components/About/About';
import Projects from './components/ProjectsShowcase/Projects';
import TechnologiesBar from './components/TechnologiesBar/TechnologiesBar';
import LearningTechs from './components/LearningTechs/LearningTechs';
import Footer from './components/Footer/Footer';
import ContactBox from './components/ContactBox/ContactBox';

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Header />
      <BackgroundTintWrapper>
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
