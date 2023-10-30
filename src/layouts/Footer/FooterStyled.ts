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

  @media (min-width: 1440px) {
    justify-content: space-between;

    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 165px;
    padding-right: 165px;
  }
`;

export const ContentWrapper = styled.div<PropsStyle>`
  margin-bottom: 38px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    margin: 0;
    margin-right: 133px;

    @media (min-width: 1440px) {
      align-items: flex-start;

      margin-right: 0;
    }
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

    @media (min-width: 1440px){
        margin-right: 140px;

        font-size: 48px;
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

    @media (min-width: 1440px){
        width: 430px;

        font-size: 18px;
        line-height: 1.56;
    }
  }
`;
