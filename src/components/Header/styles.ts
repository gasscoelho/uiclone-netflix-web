import styled from 'styled-components';

interface ContainerProps {
  hasScrolled?: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: ${props => (props.hasScrolled ? '#141414' : 'transparent')};
  transition: all ease-in 0.3s;

  svg {
    height: 24px;
    cursor: pointer;
  }
`;

export const AvatarIcon = styled.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 2px;
`;
