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
        <CopyWright>&copy;Darsh Dhillon {new Date().getFullYear()}</CopyWright>
        <ScrollToTopIcon onClick={scrollToTop} />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  padding: 2rem;
  display: flex;
`;

const CopyWright = styled.p`
  font-size: 1.1rem;
  color: #fff;
`;

const ScrollToTopIcon = styled(IoIosArrowDropup)`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #fff;
`;
