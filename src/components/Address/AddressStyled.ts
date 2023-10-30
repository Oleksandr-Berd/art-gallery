import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-top: 48px;
  padding-bottom: 56px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #151515;

  @media (min-width: 768px) {
    padding-top: 88px;
    padding-bottom: 80px;
    padding-left: 39px;
    padding-right: 40px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    padding-top: 104px;
    padding-bottom: 128px;
    padding-left: 165px;
    padding-right: 165px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 48px;

  text-transform: uppercase;
  color: #fff;
  font-size: 50px;
  line-height: 0.9;

  @media (min-width: 768px) {
    margin: 0;
    margin-right: 68px;

    font-size: 55px;
  }

  @media (min-width: 1440px) {
    width: 300px;

    font-size: 70px;
    line-height: 1;
  }
`;

export const Street = styled.p`
  margin-bottom: 20px;

  text-transform: uppercase;
  font-size: 32px;
  color: #d5966c;
  font-weight: bold;

  @media (min-width: 1440px) {
    margin-bottom: 24px;

    font-size: 36px;
  }
`;

export const AddressWrapper = styled.div`
  margin-bottom: 20px;

  color: #fff;
  font-size: 18px;
  font-family: "Outfit";
  line-height: 1.56;
  font-weight: lighter;

  @media (min-width: 1440px) {
    margin-bottom: 32px;

    font-size: 22px;
    line-height: 1.45;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 18px;
  font-family: "Outfit";
  line-height: 1.56;
  font-weight: lighter;

  @media (min-width: 768px) {
    width: 398px;
  }

  @media (min-width: 1440px) {
    width: 540px;

    font-size: 22px;
    line-height: 1.45;
  }
`;
