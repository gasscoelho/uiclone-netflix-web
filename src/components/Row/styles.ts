import styled from 'styled-components';

export const BoxLarge = styled.div`
  display: flex;
  overflow: hidden;
  margin-left: 4px;
  margin-right: 30px;
  height: 380px;
  width: 100%;
`;

export const Container = styled.div`
  user-select: none;
  margin-left: 30px;

  & + div {
    margin-top: 30px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-left: 4px;
  color: white;
`;

const posterLargeHeight = 380;
const posterNormalHeight = 140;

interface PostersWrapperProps {
  isLarge?: boolean;
  isToChangeOverflow?: boolean;
}

export const PostersWrapper = styled.div<PostersWrapperProps>`
  height: 100%;
  display: flex;
  transition: all ease-out 0.5s;
  overflow: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

  .arrowRow {
    position: absolute;
    width: 40px;
    height: ${props =>
      props.isLarge ? posterLargeHeight - 19 : posterNormalHeight - 7}px;
    margin-top: ${props => (props.isLarge ? 9 : 3)}px;
    background: transparent;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: white;
    cursor: pointer;
    transition: opacity 0.4s, background 0.4s;
    opacity: 0;
  }

  .arrowRow:hover {
    background: rgba(17, 17, 17, 0.5);

    svg {
      transform: scale(1.2);
    }
  }

  &:hover {
    .arrowRow {
      opacity: 1;
    }
  }
`;

interface PosterProps {
  isLarge?: boolean;
}

export const Poster = styled.img<PosterProps>`
  /* width: 240px ~ 250px; */
  object-fit: contain;
  width: 100%;
  max-height: ${props =>
    props.isLarge ? posterLargeHeight : posterNormalHeight}px;
  transition: transform 0.4s;
  cursor: pointer;
  transform: scale(0.95);

  &:hover {
    transform: scale(1);
    z-index: 10;
  }
`;

export const ArrowLeftContainer = styled.div`
  left: 0;
`;

export const ArrowRightContainer = styled.div`
  right: 0;
`;
