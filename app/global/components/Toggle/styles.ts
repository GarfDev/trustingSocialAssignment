import styled from 'styled-components';

const Styles = {
  ToggleContainer: styled.button<{lightTheme: boolean}>`
    position: relative;
    outline: none !important;
    border: none;
    background-color: ${({theme}) => theme.color};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    margin-right: 0.6rem;
    width: 80px;
    height: 30px;
    padding: 0.5rem;
  `,
  LightText: styled.span<{center: boolean}>`
    position: absolute;
    color: ${({theme}) => theme.backgroundColor};
    font-weight: bolder;
    transform: ${({center}) =>
      center ? 'translateX(0)' : 'translateX(100px)'};
    transition: all 0.25s linear;
  `,
  DarkText: styled.span<{center: boolean}>`
    position: absolute;
    color: ${({theme}) => theme.backgroundColor};
    font-weight: bolder;
    transform: ${({center}) =>
      center ? 'translateX(0)' : 'translateX(100px)'};
    transition: all 0.25s linear;
  `,
};

export default Styles;
