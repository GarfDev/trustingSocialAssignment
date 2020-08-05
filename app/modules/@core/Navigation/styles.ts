import styled from 'styled-components';

const Styles = {
  Container: styled.header`
    display: flex;
    flex-wrap: wrap;
    padding: 50px 40px;
    justify-content: flex-end;
    align-items: center;

    .nav-link {
      margin-left: 2rem;
      transition: all 0.25s linear;
    }

    @media screen and (max-width: 600px) {
      .nav-link {
        margin-left: 10px;
        align-self: flex-end;
      }
    }
  `,
};

export default Styles;
