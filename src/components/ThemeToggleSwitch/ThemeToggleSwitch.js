import { useContext } from 'react';
import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { AppContext } from '../../context/ContextProvider';

const ThemeToggleSwitch = () => {
  const { setThemeColor } = useContext(AppContext);

  return (
    <Container>
      <SwitchInput type='checkbox' id='chk' />
      <Label
        onClick={() =>
          setThemeColor((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
        htmlFor='chk'
      >
        <SunIcon />
        <MoonIcon />
        <LabelBall></LabelBall>
      </Label>
    </Container>
  );
};

export default ThemeToggleSwitch;

const Container = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
`;

const Label = styled.label`
  background-color: var(--mainGreen);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1.5);
`;

const LabelBall = styled.div`
  background-color: var(--mainCharcoal);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;

const MoonIcon = styled(BsMoon)`
  color: yellow;
`;

const SunIcon = styled(FiSun)`
  color: yellow;
`;

const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;

  :checked + ${Label} ${LabelBall} {
    transform: translateX(24px);
  }
`;
