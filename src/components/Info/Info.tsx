import { useMediaQuery } from "usehooks-ts";

import * as SC from "./InfoStyled";

import infoPic1 from "../../assets/images/info_pic1.jpg";
import infoPic2 from "../../assets/images/info_pic2.jpg";
import infoPic3 from "../../assets/images/info_pic3.jpg";
import infoPicTab1 from "../../assets/images/info_pic_tab1.jpg";
import infoPicTab2 from "../../assets/images/info_pic_tab2.jpg";
import infoPicTab3 from "../../assets/images/info_pic_tab3.jpg";
import infoPicDesk1 from "../../assets/images/info_pic_desk1.jpg"
import infoPicDesk2 from "../../assets/images/info_pic_desk2.jpg"
import infoPicDesk3 from "../../assets/images/info_pic_desk3.jpg"



const Info: React.FC = () => {
  const isMobile = useMediaQuery("(min-width: 375px) and (max-width:767px)");

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width:1439px)");
  const isDesktop = useMediaQuery("(min-width:1440px)");

  return (
    <SC.MainCon>
      {isMobile ? (
        <ul>
          <SC.FirstImgWrapper>
            <img src={infoPic1} alt="gallery one" />
          </SC.FirstImgWrapper>
          <SC.FirstContentWrapper>
            <h2>Your Day at the Gallery</h2>
            <p>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </SC.FirstContentWrapper>
          <SC.SecondImgWrapper>
            <img src={infoPic2} alt="gallery two" />
          </SC.SecondImgWrapper>
          <SC.ThirdImgWrapper>
            <img src={infoPic3} alt="gallery three" />
          </SC.ThirdImgWrapper>
          <SC.SecondContentWrapper>
            <h2>COME & BE INSPIRED</h2>
            <p>
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </SC.SecondContentWrapper>
        </ul>
      ) : isTablet || isDesktop ? (
        <SC.InfoList>
          <SC.FirstLevel>
            <SC.FirstContentWrapper>
              <h2>Your Day at the Gallery</h2>
              <p>
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </p>
            </SC.FirstContentWrapper>
            <SC.FirstImgWrapper>
              <img
                src={isTablet ? infoPicTab1 : infoPicDesk1}
                alt="gallery one"
              />
            </SC.FirstImgWrapper>
          </SC.FirstLevel>
          <SC.SecondLevel>
            <SC.SecondImgWrapper>
              <img
                src={isTablet ? infoPicTab2 : infoPicDesk2}
                alt="gallery two"
              />
            </SC.SecondImgWrapper>
            <div>
              <SC.ThirdImgWrapper>
                <img
                  src={isTablet ? infoPicTab3 : infoPicDesk3}
                  alt="gallery three"
                />
              </SC.ThirdImgWrapper>
              <SC.SecondContentWrapper>
                <h2>COME & BE INSPIRED</h2>
                <p>
                  We’re excited to welcome you to our gallery and see how our
                  collections influence you.
                </p>
              </SC.SecondContentWrapper>
            </div>
          </SC.SecondLevel>
        </SC.InfoList>
      ) : null}
    </SC.MainCon>
  );
};

export default Info;
