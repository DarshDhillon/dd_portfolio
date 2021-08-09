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

  return (
    <AppContext.Provider
      value={{
        contactRef,
        projectsRef,
        aboutRef,
        themeColor,
        handleScrollToElement,
        setThemeColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
