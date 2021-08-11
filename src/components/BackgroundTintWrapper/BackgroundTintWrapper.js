import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const BackgroundTintWrapper = ({ children }) => {
  const { themeColor } = useContext(AppContext);

  return (
    <TintedWrapperDiv $themeColor={themeColor}>{children}</TintedWrapperDiv>
  );
};

export default BackgroundTintWrapper;

const TintedWrapperDiv = styled.div`
  background-color: ${({ $themeColor }) =>
    $themeColor === 'light' ? '#0000009d' : '#000000d6'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
