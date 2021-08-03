import ContactBox from './components/ContactBox/ContactBox';
import Header from './components/Header/Header';
import GlobalStyle from './utils/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
        <ContactBox />
      </div>
    </>
  );
};

export default App;
