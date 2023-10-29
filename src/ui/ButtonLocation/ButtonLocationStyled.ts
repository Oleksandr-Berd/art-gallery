import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 16px;
`;

export const LinkCon = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 35px;

  background-color: #151515;

  & > a {
    text-transform: uppercase;
    color: #fff;
    font-size: 20px;
    letter-spacing: 3.64px;
    line-height: auto;
    font-weight: bold;
  }
`;

export const ArrowCon = styled.div`

  padding-top: 21.25px;
  padding-bottom: 21.25px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #d5966c;
`;
