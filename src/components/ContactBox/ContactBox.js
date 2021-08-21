import { useState, useContext } from 'react';
import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import ContactForm from './ContactForm';
import { AppContext } from '../../context/ContextProvider';

const ContactBox = () => {
  const [phoneNumberBox, setShowPhoneNumberbox] = useState(false);
  const [blurElement, setBlurElement] = useState(false);
  const { contactRef, themeColor } = useContext(AppContext);

  return (
    <BoxContainer $themeColor={themeColor} ref={contactRef}>
      <HeadingWrapper $blurElement={blurElement}>
        <BoxHeading $themeColor={themeColor}>Get in touch</BoxHeading>
        <CTAWrapper>
          <CTAMessage $themeColor={themeColor}>
            Call, email, or drop me a message below
          </CTAMessage>
          <CTAIconsWrapper>
            <Anchor onClick={() => setShowPhoneNumberbox((prev) => !prev)}>
              <PhoneIcon />
            </Anchor>
            <Anchor rel='noreferrer' href='mailto:contact@darshdhillon.co.uk'>
              <EmailIcon />
            </Anchor>
          </CTAIconsWrapper>
        </CTAWrapper>
      </HeadingWrapper>
      <ContactForm blurElement={blurElement} setBlurElement={setBlurElement} />
      <PhoneNumberBox $fade={phoneNumberBox}>07889 732764</PhoneNumberBox>
    </BoxContainer>
  );
};

export default ContactBox;

const BoxContainer = styled.div`
  margin-top: 12rem;
  background: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--glassWhite)' : 'var(--glassCharcoal)'};
  box-shadow: 0 2px 8px 0 var(--mainGreen);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: relative;
  height: 620px;
  width: 600px;
  transition: all 0.3 ease;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const HeadingWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -moz-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -o-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -ms-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
`;

const BoxHeading = styled.h1`
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  transition: all 0.3 ease;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const CTAWrapper = styled.div``;

const CTAMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  transition: all 0.3 ease;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const CTAIconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  font-size: 2.5rem;
`;

const Anchor = styled.a`
  cursor: pointer;
`;

const EmailIcon = styled(HiOutlineMail)`
  color: var(--mainGreen);
`;

const PhoneIcon = styled(HiOutlinePhone)`
  color: var(--mainGreen);
`;

const PhoneNumberBox = styled.div`
  border-radius: 1rem;
  text-align: center;
  padding: 0.3rem;
  position: absolute;
  background-color: #fff;
  top: 3%;
  left: 50%;
  width: 200px;
  font-size: 1.5rem;
  color: #000;
  transform: translate(-50%, -3%);
  visibility: ${({ $fade }) => ($fade ? 'visible' : 'hidden')};
  opacity: ${({ $fade }) => ($fade ? '1' : '0')};
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
