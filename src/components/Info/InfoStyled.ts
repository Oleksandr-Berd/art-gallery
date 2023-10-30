import styled from "@emotion/styled";

export const MainCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 120px;

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 164px;
    padding-bottom: 180px;
  }
`;

export const FirstImgWrapper = styled.li`
  width: 343px;
  height: 320px;

  margin-bottom: 25px;

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 398px;
    height: 400px;

    margin: 0;
  }

  @media (min-width: 1440px) {
    width: 635px;
    height: 400px;
  }
`;

export const SecondImgWrapper = styled.li`
  width: 343px;
  height: 480px;

  margin-bottom: 16px;

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 398px;
    height: 720px;

    margin: 0;
    margin-right: 11px;
  }

  @media (min-width: 1440px){
    width: 635px;
    height: 720px;

    margin-right: 30px;
  }
`;

export const ThirdImgWrapper = styled.li`
  width: 343px;
  height: 200px;

  margin-bottom: 16px;

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 280px;
    height: 313px;

    margin: 0;
    margin-bottom: 11px;
  }

  @media (min-width: 1440px){
    width: 445px;
    height: 313px;

    margin-bottom: 30px;
  }
`;

export const FirstContentWrapper = styled.li`
  margin-bottom: 32px;

  & > h2 {
    margin-bottom: 21px;

    text-transform: uppercase;

    font-weight: bolder;
    font-size: 50px;
    line-height: 0.9;
    color: #151515;

    @media (min-width: 768px) {
      width: 180px;

      margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
      width: 300px;

      margin-bottom: 32px;

      font-size: 60px;
      line-height: 0.83;
    }
  }

  & > p {
    font-size: 18px;
    line-height: 1.56;
    font-family: "Outfit";
    color: #444;
    font-weight: lighter;

    @media (min-width: 1440px) {
      font-size: 22px;
      line-height: 1.45;
    }
  }

  @media (min-width: 768px) {
    width: 223px;

    margin: 0;
    margin-right: 68px;
  }

  @media (min-width: 1440px) {
    width: 350px;

    margin: 0;
  }
`;

export const SecondContentWrapper = styled.li`
  padding-top: 48px;
  padding-bottom: 47px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #151515;

  @media (min-width: 768px) {
    width: 223px;

    padding-top: 85px;
    padding-bottom: 85px;
    padding-left: 29px;
    padding-right: 28px;
  }

  @media (min-width: 1440px){
    width: 350px;

    padding-top: 65px;
    padding-bottom: 64px;
    padding-left: 48px;
    padding-right: 47px;
  }

  & > h2 {
    margin-bottom: 24px;

    text-transform: uppercase;

    font-weight: bold;
    font-size: 50px;
    line-height: 0.9;
    color: #fff;

    @media (min-width: 1440px){

        margin-bottom: 32px;

        font-size: 60px;
        line-height: 1;
    }
  }

  & > p {
    font-weight: lighter;
    font-size: 18px;
    line-height: 1.56;
    font-family: "Outfit";
    color: #fff;

    @media (min-width: 1440px){
        font-size: 22px;
        line-height: 1.45;
    }
  }
`;

export const InfoList = styled.ul``;

export const FirstLevel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 11px;

  @media (min-width: 1440px) {
    justify-content: space-between;

    margin-bottom: 30px;
  }
`;

export const SecondLevel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1440px){
    align-items: flex-start;
  }
`;
