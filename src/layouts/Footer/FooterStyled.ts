import styled from "@emotion/styled";

type PropsStyle = {
  pathName: string;
};

export const FooterStyled = styled.footer<PropsStyle>`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;

  background-color: ${(props) =>
    props.pathName === "home" ? "#151515" : "#D5966C"};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 39px;
    padding-right: 40px;
  }
`;

export const ContentWrapper = styled.div<PropsStyle>`
  margin-bottom: 38px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    margin: 0;
    margin-right: 133px;
  }
  & h2 {
    text-transform: uppercase;
    color: ${(props) => (props.pathName === "home" ? "#fff" : "#151515")};
    font-size: 40px;
    line-height: 0.9;

    @media (min-width: 768px) {
      margin-right: 65px;

      font-size: 26px;
    }
  }

  & > p {
    margin-top: 38px;

    font-family: "Outfit";
    color: ${(props) => (props.pathName === "home" ? "#fff" : "#151515")};
    font-size: 16px;
    line-height: 1.63;
    font-weight: lighter;

    @media (min-width: 768px) {
      width: 281px;

      margin: 0;
    }
  }
`;
