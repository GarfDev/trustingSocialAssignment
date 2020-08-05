import styled from 'styled-components';

const Styles = {
  Wrapper: styled.div`
    width: 100%;
    height: max-content;
    padding: 20px;

    .legend-input {
      padding: 18px 25px;
    }

    @media screen and (max-width: 600px) {
      .legend-input {
        padding: 18px 15px;
      }
    }
  `,
  Input: styled.input`
    position: relative;
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '5rem'};
    font-size: ${({height}) => (height ? `calc(${height} - 2.5vh)` : '2rem')};
    border: 1px solid;
    color: ${({theme}) => theme.borderColor};
    border-radius: 35px;
    transition: all 0.25s linear;
    outline: none;
    &:hover,
    &:focus {
      border: 1px solid ${({theme}) => theme.color};
      box-shadow: 0 0 13px ${({theme}) => theme.color};
      transition: all 0.25s linear;
    }
    &::placeholder {
      color: ${({theme}) => theme.borderColor};
    }
  `,
  ResultContainer: styled.div<{inputWidth?: string}>`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    width: ${({inputWidth}) => inputWidth};
    max-height: 60vh;
    overflow: hidden;
  `,
  Result: styled.div<{height?: string}>`
    padding: 15px;
    width: max-content;
    height: max-content;
    font-size: ${({height}) => (height ? `calc(${height} -  2.5vh)` : '2rem')};
    border-radius: 5px;
    margin: 10px;
    animation: fadeIn ease 0.7s;
    transition: all 0.25s linear;
    &:hover {
      color: ${({theme}) => theme.backgroundColor};
      background-color: ${({theme}) => theme.color};
      transition: all 0.25s linear;
      cursor: pointer;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  ErrorMessage: styled.span`
    padding: 20px;
    font-size: 1.2rem;
    font-weight: 400;
  `,
};

export default Styles;
