import styled from "@emotion/styled";

export const MainCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 120px;
`;

export const FirstImgWrapper = styled.li`
  width: 343px;
  height: 320px;

  margin-bottom: 25px;

  & > img {
    width: 100%;
    height: 100%;
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
`;

export const ThirdImgWrapper = styled.li`
  width: 343px;
  height: 200px;

  margin-bottom: 16px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const FirstContentWrapper = styled.li`
margin-bottom: 32px;

  & > h2 {
    margin-bottom: 21px;

    text-transform: uppercase;

    font-weight: bold;
    font-size: 50px;
    line-height: 0.9;
    color: #151515;
  }

  & > p {
    font-size: 18px;
    line-height: 1.56;
    font-family: "Outfit";
    color: #444;
  }
`;

export const SecondContentWrapper = styled.li`
  padding-top: 48px;
  padding-bottom: 47px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #151515;

  & > h2 {
    margin-bottom: 24px;

    text-transform: uppercase;

    font-weight: bold;
    font-size: 50px;
    line-height: 0.9;
    color: #fff;
  }

  & > p {
    font-weight: lighter;
    font-size: 18px;
    line-height: 1.56;
    font-family: "Outfit";
    color: #fff;
  }
`;
