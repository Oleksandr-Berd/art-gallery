import { useLocation } from "react-router-dom";

import * as SC from "./ButtonLocationStyled";

import { ReactComponent as ArrowMob } from "../../assets/images/button_arrow_mob.svg";
import { ReactComponent as ArrowBack } from "../../assets/images/ArrowBack.svg";
import { ButtonWrapperLocation } from './ButtonLocationStyled';


const ButtonLocation = () => {
  const location = useLocation();

const path:string = location.pathname

  return (
    <>
      {path === "/location" ? (
        <SC.ButtonWrapperLocation>
          <SC.ArrowCon>
            <ArrowBack />
          </SC.ArrowCon>

          <SC.LinkCon>
            <a href="/">back to home</a>
          </SC.LinkCon>
        </SC.ButtonWrapperLocation>
      ) : (
        <SC.ButtonWrapper>
          <SC.LinkCon>
            <a href="/location">
             our location
            </a>
          </SC.LinkCon>      
            <SC.ArrowCon>
              <ArrowMob />
            </SC.ArrowCon>
        </SC.ButtonWrapper>
      )}
    </>
  );
};

export default ButtonLocation;
