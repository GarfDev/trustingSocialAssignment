import styled from 'styled-components';

const Styles = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-height: 100vh;
    overflow: hidden;

    .column {
      width: 50%;
    }

    @media screen and (max-width: 768px) {
      .column {
        width: 90%;
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
  Column: styled.div``,
};

export default Styles;
