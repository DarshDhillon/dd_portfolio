import GlobalStyle from './utils/GlobalStyle';
import Header from './components/Header/Header';
import ContactBox from './components/ContactBox/ContactBox';
import Projects from './components/ProjectsShowcase/Projects';

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
        <ContactBox />
      </div>
    </>
  );
};

export default App;
