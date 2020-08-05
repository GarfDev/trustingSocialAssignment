import styled from 'styled-components';

const Styles = {
  Wrapper: styled.div`
    width: max-content;
    height: max-content;
  `,
  Input: styled.input`
    position: relative;
    width: ${({width}) => width || '60%'};
    height: ${({height}) => height || '5rem'};
    font-size: ${({height}) => (height ? `calc(${height} - 2rem)` : '2rem')};
    padding: 18px 20px;
    border: 1px solid;
    border-radius: 35px;
    outline: none;
  `,
  ResultContainer: styled.div<{inputWidth?: string}>`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 0px;
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

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
};

export default Styles;
