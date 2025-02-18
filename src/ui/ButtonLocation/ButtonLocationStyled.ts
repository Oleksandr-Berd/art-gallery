import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 16px;

  @media (min-width: 768px) {
    margin: 0;
  }

  @media (min-width: 1440px) {
    & > div:first-child {
      transition: background-color 0.3s ease-in-out;
    }

    & > div:last-child {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      & > div:first-child {
        background-color: #d5966c;
        transition: background-color 0.3s ease-in-out;
      }

      & > div:last-child {
        background-color: #151515;
        transition: background-color 0.3s ease-in-out;
      }
    }
  }
`;

export const ButtonWrapperLocation = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(-16px);

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 16px;

  @media (min-width: 768px) {
    transform: translateX(30px);
  }

  @media (min-width: 1440px) {
    transform: translateX(130px);

    & > div:first-child {
      transition: background-color 0.3s ease-in-out;
    }

    & > div:last-child {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      & > div:last-child {
        background-color: #d5966c;
        transition: background-color 0.3s ease-in-out;
      }

      & > div:first-child {
        background-color: #151515;
        transition: background-color 0.3s ease-in-out;
      }
    }
  }
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
