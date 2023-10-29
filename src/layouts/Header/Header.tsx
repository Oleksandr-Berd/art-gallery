import * as SC from "./HeaderStyled"

import headerPicMob from "../../assets/images/header_pic_mob.jpg"

import ButtonLocation from "../../ui/ButtonLocation/ButtonLocation";

const Header = () => {
    return (
      <SC.HeaderStyled>
        <SC.ImageCon>
          <img src={headerPicMob} alt="header" />
        </SC.ImageCon>
        <SC.ContentCon>
          <SC.Title>modern art gallery</SC.Title>
          <SC.Paragraph>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </SC.Paragraph>
        </SC.ContentCon>
        <ButtonLocation/>
      </SC.HeaderStyled>
    );
}
 
export default Header;