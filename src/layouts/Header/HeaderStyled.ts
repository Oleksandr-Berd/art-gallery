import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  padding-bottom: 120px;

  @media (min-width: 768px) {
    position: relative;

    display: flex;
    justify-content: flex-end;

    padding-top: 145px;
    padding-bottom: 265px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;

    padding-top: 190px;
    padding-bottom: 494px;
    padding-left: 165px;
    padding-right: 164px;

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -5;
        content: " ";
        width: 450px;
        height: 799px;
        background-color: #151515;
    }
  }
`;

export const ImageCon = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;

    margin: 0;

    width: 437px;
    height: 700px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 1440px){
    width: 540px;
    height: 800px;

    transform: translateX(410px);
  }
`;

export const ContentCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 32px;

  text-align: left;

  @media (min-width: 768px) {
    width: 339px;

    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 60px;
  line-height: 0.92;
  color: #151515;

  @media (min-width: 768px) {
    width: 285px;

    margin-bottom: 48px;

    font-size: 70px;
    font-weight: bolder;
  }

  @media (min-width: 1440px) {
    width: 390px;

    margin: 0;

    font-size: 96px;
    color: #fff;

    & > span{
        color: #151515;
    }
  }
`;

export const Paragraph = styled.p`
  font-family: "Outfit";
  font-size: 16px;
  line-height: 1.56;
  color: #444444;

  @media (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 1.56;
    font-weight: lighter;
  }

  @media (min-width: 1440px) {
    margin-bottom: 64px;

    font-size: 22px;
    line-height: 1.45;
  }
`;

export const GradLetter = styled.span`
  position: relative;
  display: inline-block;
  color: transparent;

  &::before {
    content: attr(data-letter);
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    overflow: hidden;
    color: white;
    background-color: black;
  }
`;