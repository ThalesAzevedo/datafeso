import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0; 
        border:0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Warpper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    padding-left: 30px;
    padding-top: 30px;
    color: #005151;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #127e71;
  width: 100vmax;
  padding: 30px;

  h1 {
    color: #fff;
    font-size: 20;
    font-weight: bold;
    padding: 0;
  }
  img {
    max-width: 220px;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vmax;
  padding: 20px;
  background-color: #212121;
  h1 {
    color: #fff;
  }
  img {
    max-width: 200px;
    height: 50px;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      margin-top: 10px;
    }
    input {
      height: 25px;
      width: auto;
    }

    button {
      margin: 10px;
      padding: 10px;
      width: 150px;
      color: #fff;
      background-color: #005151;
      border: none;
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 5;
`;

export const ProjectsWarp = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

export const ProjectFilterWrap = styled.div`
  background-color: #005151;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  margin: 30px;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }
  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 10px;
    }
    input {
      height: 25px;
      width: auto;
    }

    button {
      margin: 10px;
      padding: 10px;
      width: 170px;
      color: #fff;
      background-color: #127e71;
      border: none;
    }
  }
`;
export const CardWarp = styled.div`
  background-color: #e5e5e5;
  color: #666;
  border-radius: 5px;
  margin: 10px;
  width: 350px;
  overflow: hidden;
  font-size: 14px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  span {
    font-weight: bold;
  }
  * {
    margin: 0px;
    padding: 2px;
  }
`;
export const CardHeader = styled.div`
  padding: 15px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;

  background-color: #127e71;
  color: #fff;
  p {
    font-size: 12px;
  }
`;

export const CardDescription = styled.div`
  padding: 15px;
  background-color: #e5e5e5;
`;

export const ProjectContentWarp = styled.div`
  flex-grow: 4;
`;
