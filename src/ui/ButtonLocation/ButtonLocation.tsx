import { useLocation } from "react-router-dom";

import * as SC from "./ButtonLocationStyled";

import { ReactComponent as ArrowMob } from "../../assets/images/button_arrow_mob.svg";

const ButtonLocation = () => {
  const location = useLocation();

const path = location.pathname

  return (
    <SC.ButtonWrapper>
      {path === "/location" ? (
        <SC.ArrowCon>
          <ArrowMob />
        </SC.ArrowCon>
      ) : null}
      <SC.LinkCon>
        <a href="/location">
          {path === "/" ? "our location" : "back to home"}
         
        </a>
      </SC.LinkCon>
      {path === "/" ? (
        <SC.ArrowCon>
          <ArrowMob />
        </SC.ArrowCon>
      ) : null}
    </SC.ButtonWrapper>
  );
};

export default ButtonLocation;
