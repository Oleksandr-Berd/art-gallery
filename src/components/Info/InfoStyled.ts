import styled from "@emotion/styled";

export const MainCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 120px;

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 40px;
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
`;

export const SecondImgWrapper = styled.li`
  width: 343px;
  height: 480px;

  margin-bottom: 16px;

  & > img {
    width: 100%;
    height: 100%;
  }

  @media(min-width: 768px){
    width: 398px;
    height: 720px;

    margin: 0;
    margin-right: 11px;
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

  @media (min-width: 768px){
    width: 280px;
    height: 313px;

    margin: 0;
    margin-bottom: 11px;
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

    @media (min-width: 768px){
        margin: 0;
    }
  }

  & > p {
    font-size: 18px;
    line-height: 1.56;
    font-family: "Outfit";
    color: #444;
    font-weight: lighter;
  }

  @media (min-width: 768px) {
    width: 223px;

    margin: 0;
    margin-right: 68px;
  }
`;

export const SecondContentWrapper = styled.li`
  padding-top: 48px;
  padding-bottom: 47px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #151515;

@media (min-width: 768px){
    width: 223px;

    padding-top: 85px;
    padding-bottom: 85px;
    padding-left: 29px;
    padding-right: 28px;
}

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

export const InfoList = styled.ul`
 
`;

export const FirstLevel = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 11px;
`

export const SecondLevel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;