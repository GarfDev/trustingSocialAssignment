import styled from 'styled-components';

const Styles = {
  Wrapper: styled.div`
    width: max-content;
    height: max-content;
    padding: 20px;
  `,
  Input: styled.input`
    position: relative;
    width: ${({width}) => width || '60%'};
    height: ${({height}) => height || '5rem'};
    font-size: ${({height}) => (height ? `calc(${height} - 2rem)` : '2rem')};
    padding: 18px 20px;
    border: 1px solid;
    border-radius: 35px;
    transition: all 0.25s linear;
    outline: none;
    &:hover {
      border: 1px solid ${({theme}) => theme.color};
      box-shadow: 0 0 13px ${({theme}) => theme.color};
      transition: all 0.25s linear;
    }
  `,
  ResultContainer: styled.div<{inputWidth?: string}>`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 20px;
    max-width: ${({inputWidth}) => inputWidth};
    max-height: 80%;
    overflow: hidden;
  `,
  Result: styled.div`
    padding: 15px;
    width: max-content;
    height: max-content;
    border: 1px solid;
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
    font-size: 1.2rem;
    font-weight: 400;
  `,
};

export default Styles;
