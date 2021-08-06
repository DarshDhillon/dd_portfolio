import { createContext, useRef, useState } from 'react';
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScrollToElement = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  const [themeColor, setThemeColor] = useState('light');

  return (
    <AppContext.Provider
      value={{
        contactRef,
        projectsRef,
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
