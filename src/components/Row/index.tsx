import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import smoothscroll from 'smoothscroll-polyfill';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  Container,
  Title,
  PostersWrapper,
  Poster,
  ArrowLeftContainer,
  ArrowRightContainer,
  BoxLarge,
} from './styles';

import TMDbService from '../../apis/TMDb/implementations/TMDbService';
import { Result as ResultResponse } from '../../apis/TMDb/dtos/IDiscoverDTO';
import { baseImgURL, supportedSizes } from '../../apis/TMDb/config';

type FetchOption =
  | 'netflix-originals'
  | 'trending-now'
  | 'top-rated'
  | 'action-movie'
  | 'comedy-movie'
  | 'horror-movie'
  | 'romance-movie'
  | 'documentary';

interface RowProps {
  title: string;
  fetchOption: FetchOption;
  isLarge?: boolean;
}

interface Result extends ResultResponse {
  poster_path_full: string;
  backdrop_path_full: string;
}

const tmdbService = TMDbService.getInstance();

const Row: React.FC<RowProps> = ({ title, fetchOption, isLarge }) => {
  const posterWrapperRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData(): Promise<void> {
      let response;
      switch (fetchOption) {
        case 'netflix-originals':
          response = await tmdbService.fetchNetflixOriginals();
          break;
        case 'trending-now':
          response = await tmdbService.fetchTrending();
          break;
        case 'top-rated':
          response = await tmdbService.fetchMoviesTopRated();
          break;
        case 'action-movie':
          response = await tmdbService.fetchMovies('action');
          break;
        case 'comedy-movie':
          response = await tmdbService.fetchMovies('comedy');
          break;
        case 'horror-movie':
          response = await tmdbService.fetchMovies('horror');
          break;
        case 'romance-movie':
          response = await tmdbService.fetchMovies('romance');
          break;
        case 'documentary':
          response = await tmdbService.fetchMovies('documentary');
          break;
        default:
          break;
      }

      if (response) {
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

        setResults(resultsFiltered);
      }
      setIsLoading(false);
    }

    fetchData();

    // Enable native smooth scrolling in Chrome, Firefox and Opera.
    smoothscroll.polyfill();
  }, [fetchOption]);

  const handleLeftArrowClick = useCallback(() => {
    const posterQuantityInScreen = Math.round(window.innerWidth / 240) - 1;

    if (posterWrapperRef.current !== null) {
      // Multipling the poster quantity by the poster width to represent
      // a jump of all the posters in the screen.
      // If we have 5 poster, then we will jump a size of 5 of them.
      const jumpSize =
        posterWrapperRef.current.scrollLeft - posterQuantityInScreen * 240;
      posterWrapperRef.current.scrollLeft = jumpSize;
    }
  }, []);

  const handleRightArrowClick = useCallback(() => {
    // 240 is related to the Poster's width.
    const posterQuantityInScreen = Math.round(window.innerWidth / 240) - 1;

    if (posterWrapperRef.current !== null) {
      // Multipling the poster quantity by the poster width to represent
      // a jump of all the posters in the screen.
      // If we have 5 poster, then we will jump a size of 5 of them.
      const jumpSize =
        posterWrapperRef.current.scrollLeft + posterQuantityInScreen * 240;
      posterWrapperRef.current.scrollLeft = jumpSize;
    }
  }, []);

  return (
    <Container>
      <Title>{title}</Title>

      <PostersWrapper ref={posterWrapperRef} isLarge={isLarge}>
        {isLoading ? (
          <BoxLarge>
            <SkeletonTheme color="#202020" highlightColor="#262626">
              <Skeleton
                width={242}
                height={380}
                count={10}
                style={{
                  marginRight: '12px',
                }}
              />
            </SkeletonTheme>
          </BoxLarge>
        ) : (
          results.map(result => (
            <Poster
              key={result.id}
              src={
                isLarge ? result.poster_path_full : result.backdrop_path_full
              }
              alt={result.name}
              isLarge={isLarge}
            />
          ))
        )}
        <ArrowLeftContainer className="arrowRow" onClick={handleLeftArrowClick}>
          <FaChevronLeft size={36} />
        </ArrowLeftContainer>
        <ArrowRightContainer
          className="arrowRow"
          onClick={handleRightArrowClick}
        >
          <FaChevronRight size={36} />
        </ArrowRightContainer>
      </PostersWrapper>
    </Container>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchOption: PropTypes.oneOf<FetchOption>([
    'netflix-originals',
    'trending-now',
    'top-rated',
    'action-movie',
    'comedy-movie',
    'horror-movie',
    'romance-movie',
    'documentary',
  ]).isRequired,
  isLarge: PropTypes.bool,
};

Row.defaultProps = {
  isLarge: false,
};

export default Row;
