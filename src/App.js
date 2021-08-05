import GlobalStyle from './utils/GlobalStyle';
import Header from './components/Header/Header';
import ContactBox from './components/ContactBox/ContactBox';
import Projects from './components/ProjectsShowcase/Projects';
import LearningTechs from './components/LearningTechs/LearningTechs';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '4rem',
        }}
      >
        <Projects />
        <LearningTechs />
        <ContactBox />
        <Footer />
      </div>
    </>
  );
};

export default App;
