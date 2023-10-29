import styled from "@emotion/styled";

type PropsStyle = {
    pathName: string,
}

export const FooterStyled = styled.footer<PropsStyle>`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;

  background-color: ${(props) =>
    props.pathName === "home" ? "#151515" : "#D5966C"};
`;

export const ContentWrapper = styled.div<PropsStyle>`
  margin-bottom: 38px;

  & > h2 {
    text-transform: uppercase;
    color: ${(props) => (props.pathName === "home" ? "#fff" : "#151515")};
    font-size: 40px;
    line-height: 0.9;
  }

  & > p {
    margin-top: 38px;

    font-family: "Outfit";
    color: ${(props) => (props.pathName === "home" ? "#fff" : "#151515")};
    font-size: 16px;
    line-height: 1.63;
  }
`;
