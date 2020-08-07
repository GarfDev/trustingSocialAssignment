/* eslint-disable max-len */
import styled from 'styled-components';

const Styles = {
  Container: styled.div<{backgroundImage: string; isBluring: boolean}>`
    display: flex;
    justify-content: center;
    position: relative;
    box-shadow: inset 0 180px 500px -120px ${({theme}) => theme.hoverColor};
    background-blend-mode: lighten;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      background-image: url(${({backgroundImage}) => backgroundImage});
      filter: ${({isBluring}) => `blur(${isBluring ? 10 : 0}px)`};
      transition: opacity 0.15s linear;
      transition: filter 0.05s linear;
      transition: background-image 0.1s linear;
      background-size: cover;
      background-repeat: no-repeat;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      z-index: -1;
    }

    .column {
      width: 50%;
    }

    @media screen and (max-width: 812px) {
      .column {
        width: 70%;
      }
    }

    @media screen and (max-width: 640px) {
      .column {
        width: 80%;
      }
    }

    @media screen and (max-width: 500px) {
      .column {
        width: 100%;
      }
    }
  `,
  Column: styled.div`
    margin-top: 200px;
  `,
};

export default Styles;
