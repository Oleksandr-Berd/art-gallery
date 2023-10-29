import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;

  background-color: #151515;
`;

export const ContentWrapper = styled.div`
  margin-bottom: 38px;

  & > h2 {
    text-transform: uppercase;
    color: #fff;
    font-size: 40px;
    line-height: 0.9;
  }

  & > p {
    margin-top: 38px;

    font-family: "Outfit";
    color: #fff;
    font-size: 16px;
    line-height: 1.63;
  }
`;
