import * as SC from "./InfoStyled"

import infoPic1 from "../../assets/images/info_pic1.jpg"
import infoPic2 from "../../assets/images/info_pic2.jpg";
import infoPic3 from "../../assets/images/info_pic3.jpg";


const Info:React.FC = () => {
    return (
      <SC.MainCon>
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
            <img src={infoPic3} alt="ga;;ery three" />
          </SC.ThirdImgWrapper>
          <SC.SecondContentWrapper>
            <h2>COME & BE INSPIRED</h2>
            <p>
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </SC.SecondContentWrapper>
        </ul>
      </SC.MainCon>
    );
}
 
export default Info;