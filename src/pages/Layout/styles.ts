import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperRow = styled.div`
  margin-top: -200px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  text-align: center;
  color: #ccc;
  font-size: 14px;

  span {
    margin-top: 18px;
  }

  .footerHeart {
    margin-left: 8px;
  }
`;

export const Copyright = styled.div`
  margin-top: 50px;
  padding: 15px 0;
  font-size: 14px;
  width: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const IconContainer = styled.div`
  margin-left: auto;
  margin-right: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    cursor: pointer;
  }
`;
