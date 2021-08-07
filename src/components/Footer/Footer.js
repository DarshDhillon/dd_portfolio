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
        <CopyWright>&copy; Darsh Dhillon {new Date().getFullYear()}</CopyWright>
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
  padding: 1rem 2rem;
`;

const FooterWrapper = styled.div`
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
