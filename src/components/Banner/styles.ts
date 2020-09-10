import styled from 'styled-components';

interface HeaderProps {
  backgroundImageURL: string;
}

export const Header = styled.header<HeaderProps>`
  background-size: cover;
  background-image: url(${props => props.backgroundImageURL});
  background-position: center;

  color: white;
  height: 90vh;
  object-fit: contain;
`;

export const Gradient = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const GradientHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(
    to right,
    rgba(17, 17, 17, 0.9) 30%,
    transparent 70%
  );
`;

export const Container = styled.div`
  margin-left: 30px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 250px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  padding-bottom: 0.3rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 8px;
  display: flex;
`;

const Button = styled.button`
  margin-top: 16px;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 1rem;
  padding: 8px 24px;
  transition: all ease 0.3s;

  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;

export const PlayButton = styled(Button)`
  background: white;
  color: black;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const MyListButton = styled(Button)`
  background: rgba(51, 51, 51, 1);
  color: white;

  &:hover {
    background: rgba(51, 51, 51, 0.7);
  }
`;

export const Description = styled.span`
  width: 45rem;
  line-height: 1.3;
  font-size: 1.2rem;
  max-width: 40%;
  max-height: 100px;
  margin-top: 18px;
  color: #e6e6e6;
  overflow: hidden;
`;
