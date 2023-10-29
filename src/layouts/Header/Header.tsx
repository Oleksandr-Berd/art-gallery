import { useMediaQuery } from "usehooks-ts";

import * as SC from "./HeaderStyled";

import headerPicMob from "../../assets/images/header_pic_mob.jpg";
import headerPicTab from "../../assets/images/header_pic_tab.jpg";

import ButtonLocation from "../../ui/ButtonLocation/ButtonLocation";


const Header = () => {

const isMobile = useMediaQuery("(min-width: 375px) and (max-width:767px)");

const isTablet = useMediaQuery(
  "(min-width: 768px) and (max-width:1439px)"
);

  return (
    <SC.HeaderStyled>
      <SC.ImageCon>
        <img src={isTablet ? headerPicTab : headerPicMob} alt="header" />
      </SC.ImageCon>
      <SC.ContentCon>
        <SC.Title>modern art gallery</SC.Title>
        <SC.Paragraph>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </SC.Paragraph>
        {isTablet ? <ButtonLocation /> : null}
      </SC.ContentCon>
      {isMobile ? <ButtonLocation /> : null}
    </SC.HeaderStyled>
  );
};

export default Header;
