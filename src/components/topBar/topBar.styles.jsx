import styled from 'styled-components';

const TopBarDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const TopBarLogo = styled.div`
  max-width: 20%;

  img {
    margin: 10px;
    max-width: 20%;
  }
`;

const TopBarLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -25px;
  margin-left: 85%;
  margin-right: 5%;
  width: 50%;
`;

export { TopBarDiv, TopBarLogo, TopBarLogin };
