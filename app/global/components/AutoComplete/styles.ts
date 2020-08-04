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
  ResultContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
  `,
  Result: styled.div``,
};

export default Styles;
