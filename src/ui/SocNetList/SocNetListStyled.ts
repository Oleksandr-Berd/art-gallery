import styled from "@emotion/styled";

type PropsStyles = {
    pathName:string
}

export const SocNetList = styled.ul<PropsStyles>`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > li:not(:last-child) {
    margin-right: 20px;
  }

  @media (min-width: 1440px) {
    transition: fill 0.3s ease-in-out;

    & > li:hover {
      & svg {
        fill: ${(props) =>
          props.pathName === "/location" ? "#fff" : "#D5966C"};
        transition: fill 0.3s ease-in-out;
      }
    }
  }
`;