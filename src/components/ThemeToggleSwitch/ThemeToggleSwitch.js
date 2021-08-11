import styled from 'styled-components';
import { useContext } from 'react';
import { BsMoon } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import { AppContext } from '../../context/ContextProvider';

const ThemeToggleSwitch = () => {
  const { isActiveThemeButton, handleChangeThemeColor } =
    useContext(AppContext);

  return (
    <Container $active={isActiveThemeButton} onClick={handleChangeThemeColor}>
      <IconWrapper>
        <SunIcon />
        <MoonIcon />
      </IconWrapper>
      <Icon $active={isActiveThemeButton} />
    </Container>
  );
};

export default ThemeToggleSwitch;

const Container = styled.div`
  position: relative;
  display: block;
  width: 90px;
  height: 45px;
  border-radius: 160px;
  background: var(--mainGreen);
  transition: 0.3s;
  cursor: pointer;
`;

const Icon = styled.i`
  position: absolute;
  top: 0;
  left: ${({ $active }) => ($active ? '45px' : '0')};
  width: 45px;
  height: 45px;
  background: ${({ $active }) => ($active ? ' white' : ' var(--mainCharcoal)')};

  border-radius: 50%;
  transform: scale(0.9);
  transition: 0.3s;
`;

const MoonIcon = styled(BsMoon)`
  font-size: 1.5rem;
  color: yellow;
`;

const SunIcon = styled(IoSunny)`
  font-size: 1.5rem;
  color: yellow;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;
