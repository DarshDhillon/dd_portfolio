import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const SHEET_BEST_URL =
  'https://sheet.best/api/sheets/96887a74-3ce1-492f-a009-6239eab7a7cb';

const ContactForm = ({ setBlurElement, blurElement }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sentAction, setSentAction] = useState({
    buttonText: 'Send',
    shakeAnimation: false,
  });

  const handleFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContactBoxEffect = () => {
    setSentAction({ buttonText: 'Thanks!', shakeAnimation: true });

    setBlurElement((prev) => !prev);

    setTimeout(() => {
      setSentAction({ buttonText: 'Send', shakeAnimation: false });
      setBlurElement((prev) => !prev);
    }, 4000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(SHEET_BEST_URL, formData)
      .then(() => {
        handleContactBoxEffect();
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() =>
        setFormData(() => ({
          name: '',
          email: '',
          message: '',
        }))
      );
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        type='text'
        $blurElement={blurElement}
        onChange={handleFormData}
        name='name'
        value={formData.name}
        required
        autoComplete='off'
        placeholder='Name'
      />
      <Input
        type='email'
        $blurElement={blurElement}
        onChange={handleFormData}
        name='email'
        value={formData.email}
        required
        autoComplete='off'
        placeholder='Email'
      />
      <TextArea
        type='text'
        $blurElement={blurElement}
        onChange={handleFormData}
        name='message'
        value={formData.message}
        required
        rows='5'
        autoComplete='off'
        placeholder='Message'
      />
      <SendButton $animateButton={sentAction.shakeAnimation} type='submit'>
        {sentAction.buttonText}
      </SendButton>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Input = styled.input`
  padding: 0.3rem;
  outline: none;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  -webkit-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -moz-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -o-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -ms-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.3rem;
  font-size: 1.5rem;
  outline: none;
  resize: none;
  -webkit-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -moz-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -o-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  -ms-filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};
  filter: ${({ $blurElement }) => ($blurElement ? 'blur(5px)' : '0px')};

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const SendButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  width: 30%;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
  background: var(--mainGreen);
  color: #fff;

  animation: ${({ $animateButton }) => $animateButton && 'shake 0.5s'};
  animation-iteration-count: infinite;

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
