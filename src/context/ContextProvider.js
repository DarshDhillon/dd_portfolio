import { createContext, useRef, useState } from 'react';
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToElement = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  const [themeColor, setThemeColor] = useState('dark');

  const [isActiveThemeButton, setIsActiveThemeButton] = useState(false);

  const handleChangeThemeColor = () => {
    setIsActiveThemeButton((prev) => !prev);
    setThemeColor((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider
      value={{
        contactRef,
        projectsRef,
        aboutRef,
        themeColor,
        isActiveThemeButton,
        handleChangeThemeColor,
        handleScrollToElement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
