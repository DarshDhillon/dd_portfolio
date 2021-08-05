import { createContext, useRef } from 'react';
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

  return (
    <AppContext.Provider
      value={{ contactRef, projectsRef, handleScrollToElement }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
