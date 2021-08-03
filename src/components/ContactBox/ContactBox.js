import { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import ContactForm from './ContactForm';

const ContactBox = () => {
  const [phoneNumberBox, setShowPhoneNumberbox] = useState(false);
  const [blurElement, setBlurElement] = useState(false);

  return (
    <BoxContainer>
      <HeadingWrapper $blurElement={blurElement}>
        <BoxHeading>Get in touch</BoxHeading>
        <CTAWrapper>
          <CTAMessage>Call, email, or drop me a message below</CTAMessage>
          <CTAIconsWrapper>
            <Anchor onClick={() => setShowPhoneNumberbox((prev) => !prev)}>
              <PhoneIcon />
            </Anchor>
            <Anchor rel='noreferrer' href='mailto:someone@yoursite.com'>
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
  position: relative;
  height: 600px;
  width: 600px;
  background-color: lightblue;
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

const BoxHeading = styled.h1``;

const CTAWrapper = styled.div``;

const CTAMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const CTAIconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  font-size: 2.5rem;
  color: #000;
`;

const Anchor = styled.a`
  cursor: pointer;
`;

const EmailIcon = styled(HiOutlineMail)`
  color: #000;
`;

const PhoneIcon = styled(HiOutlinePhone)``;

const PhoneNumberBox = styled.div`
  border-radius: 1rem;
  text-align: center;
  padding: 0.3rem;
  position: absolute;
  background-color: #000;
  top: 3%;
  left: 50%;
  /* height: 100px; */
  width: 200px;
  font-size: 1.5rem;
  color: #fff;
  transform: translate(-50%, -3%);
  visibility: ${({ $fade }) => ($fade ? 'visible' : 'hidden')};
  opacity: ${({ $fade }) => ($fade ? '1' : '0')};
  transition: all 0.3s ease-in-out;
`;
