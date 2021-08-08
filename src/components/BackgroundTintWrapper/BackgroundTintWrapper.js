import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
// import backgroundImage from '../../assets/images/dd_port_background2.jpg';

const BackgroundTintWrapper = ({ children }) => {
  const { themeColor } = useContext(AppContext);

  return (
    <TintedWrapperDiv $themeColor={themeColor}>{children}</TintedWrapperDiv>
  );
};

export default BackgroundTintWrapper;

const TintedWrapperDiv = styled.div`
  /* border: 1px solid red; */
  background-color: ${({ $themeColor }) =>
    $themeColor === 'light' ? '#00000096' : '#000000d6'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
