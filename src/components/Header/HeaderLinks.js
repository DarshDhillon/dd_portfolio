import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const CV_GOOGLE_DOCS_LINK =
  'https://drive.google.com/file/d/14HN7mpJpaBjJchG2IQoInrv5bI0QKVsv/view?usp=sharing';

const HeaderLinks = () => {
  const {
    contactRef,
    projectsRef,
    aboutRef,
    handleScrollToElement,
    themeColor,
  } = useContext(AppContext);

  return (
    <LinksWrapper>
      <LinksList>
        <LinkItem
          onClick={() => handleScrollToElement(aboutRef)}
          $themeColor={themeColor}
        >
          About
        </LinkItem>
        <LinkItem
          $themeColor={themeColor}
          onClick={() => handleScrollToElement(projectsRef)}
        >
          Projects
        </LinkItem>
        <LinkItem>
          <Anchor
            $themeColor={themeColor}
            target='_blank'
            rel='noreferrer'
            href={CV_GOOGLE_DOCS_LINK}
          >
            CV
          </Anchor>
        </LinkItem>
        <LinkItem
          $themeColor={themeColor}
          onClick={() => handleScrollToElement(contactRef)}
        >
          Contact
        </LinkItem>
      </LinksList>
    </LinksWrapper>
  );
};

export default HeaderLinks;

const LinksWrapper = styled.div`
  padding: 1rem;
`;

const LinksList = styled.ul`
  display: flex;
  list-style: none;
`;

const LinkItem = styled.li`
  margin: 0 2rem;
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  transition: all 0.3s;
`;
