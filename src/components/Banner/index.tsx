import React, { useState, useEffect, useCallback } from 'react';

import { FiInfo } from 'react-icons/fi';
import { GrPlayFill } from 'react-icons/gr';
import {
  Header,
  Gradient,
  GradientHorizontal,
  Container,
  Title,
  ButtonWrapper,
  PlayButton,
  MyListButton,
  Description,
} from './styles';
import TMDbService from '../../apis/TMDb/implementations/TMDbService';
import { Result as ResultResponse } from '../../apis/TMDb/dtos/IDiscoverDTO';
import { baseImgURL, supportedSizes } from '../../apis/TMDb/config';

interface MovieOrTVShow extends ResultResponse {
  poster_path_full: string;
  backdrop_path_full: string;
}

const tmdbService = TMDbService.getInstance();

const Banner: React.FC = () => {
  const [movieOrTVShow, setMovieOrTVShow] = useState<MovieOrTVShow>(
    {} as MovieOrTVShow,
  );

  const overviewTruncated = useCallback((str: string, number: number) => {
    if (str)
      return str.length > number ? `${str.substr(0, number - 1)}...` : str;
    return '';
  }, []);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await tmdbService.fetchNetflixOriginals();
      const resultsFiltered = response.results.map(result => {
        return {
          ...result,
          poster_path_full:
            baseImgURL + supportedSizes.poster.original + result.poster_path,
          backdrop_path_full:
            baseImgURL +
            supportedSizes.backdrop.original +
            result.backdrop_path,
        };
      });

      const randomMovieOrTVShow =
        resultsFiltered[Math.floor(Math.random() * response.results.length)];
      setMovieOrTVShow(randomMovieOrTVShow);
    }

    fetchData();
  }, []);

  return (
    <Header backgroundImageURL={movieOrTVShow.backdrop_path_full}>
      <Gradient>
        <GradientHorizontal>
          <Container>
            <Title>
              {movieOrTVShow.title ||
                movieOrTVShow.name ||
                movieOrTVShow.original_name}
            </Title>
            <Description>
              {overviewTruncated(movieOrTVShow.overview, 180)}
            </Description>
            <ButtonWrapper>
              <PlayButton>
                <GrPlayFill size={18} />
                Play
              </PlayButton>
              <MyListButton>
                <FiInfo size={24} />
                More Info
              </MyListButton>
            </ButtonWrapper>
          </Container>
        </GradientHorizontal>
      </Gradient>
    </Header>
  );
};

export default Banner;
