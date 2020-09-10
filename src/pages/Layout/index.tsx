import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { ReactComponent as TMDbLogo } from '../../assets/images/tmdb-logo.svg';
import {
  Container,
  WrapperRow,
  Footer,
  Copyright,
  Description,
  IconContainer,
} from './styles';
import Row from '../../components/Row';
import Banner from '../../components/Banner';
import Header from '../../components/Header';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <WrapperRow>
        <Row
          title="Netflix Originals"
          fetchOption="netflix-originals"
          isLarge
        />
        <Row title="Trending Now" fetchOption="trending-now" />
        <Row title="Top Rated" fetchOption="top-rated" />
        <Row title="Action Movies" fetchOption="action-movie" />
        <Row title="Comedy Movies" fetchOption="comedy-movie" />
        <Row title="Horror Movies" fetchOption="horror-movie" />
        <Row title="Romance Movies" fetchOption="romance-movie" />
        <Row title="Documentaries" fetchOption="documentary" />
      </WrapperRow>

      <Footer>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TMDbLogo
            style={{
              width: '180px',
            }}
          />
        </a>
        <span>
          This project uses the TMDb API but is not endorsed or certified by
          TMDb.
        </span>
        <Copyright>
          <Description>
            &copy; Digital Millennium Copyright Act (DMCA)
          </Description>
          <IconContainer>
            <FaGithub size={32} />
          </IconContainer>
        </Copyright>
      </Footer>
    </Container>
  );
};

export default Layout;
