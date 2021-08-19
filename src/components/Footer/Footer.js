import styled from 'styled-components';
import { IoIosArrowDropup } from 'react-icons/io';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <ScrollToTopIcon onClick={scrollToTop} />
        <Copyright>&copy; D Dhillon {new Date().getFullYear()}</Copyright>
        <ScrollToTopIcon onClick={scrollToTop} />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 2rem;
`;

const FooterWrapper = styled.div`
  display: flex;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ScrollToTopIcon = styled(IoIosArrowDropup)`
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 1rem;
  color: var(--mainGreen);

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
