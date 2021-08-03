import styled from 'styled-components';

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input required autoComplete='off' placeholder='Name' />
      <Input required autoComplete='off' placeholder='Email' />
      <TextArea required rows='5' autoComplete='off' placeholder='Message' />
      <SendButton type='submit'>Send</SendButton>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Input = styled.input`
  outline: none;
  background-color: lightgrey;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  background-color: lightgrey;
  font-size: 1.5rem;
  outline: none;
  resize: none;
`;

const SendButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  width: 30%;
  margin: 0 auto;
  margin-top: 1rem;
`;
