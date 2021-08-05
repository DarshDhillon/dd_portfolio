import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const CV_GOOGLE_DOCS_LINK =
  'https://drive.google.com/file/d/14HN7mpJpaBjJchG2IQoInrv5bI0QKVsv/view?usp=sharing';

const HeaderLinks = () => {
  const { contactRef, projectsRef, handleScrollToElement } =
    useContext(AppContext);

  return (
    <LinksWrapper>
      <LinksList>
        <LinkItem>About</LinkItem>
        <LinkItem onClick={() => handleScrollToElement(projectsRef)}>
          Projects
        </LinkItem>
        <LinkItem>
          <Anchor target='_blank' rel='noreferrer' href={CV_GOOGLE_DOCS_LINK}>
            CV
          </Anchor>
        </LinkItem>
        <LinkItem onClick={() => handleScrollToElement(contactRef)}>
          Contact
        </LinkItem>
      </LinksList>
    </LinksWrapper>
  );
};

export default HeaderLinks;

const LinksWrapper = styled.div`
  /* background-color: red; */
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 30%;
`;

const LinksList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const LinkItem = styled.li`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
`;
