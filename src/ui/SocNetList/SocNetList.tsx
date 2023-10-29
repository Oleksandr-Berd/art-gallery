import * as SC from "./SocNetListStyled"

import {ReactComponent as FB} from "../../assets/images/fb.svg"
import { ReactComponent as Insta } from "../../assets/images/insta.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";


const SocNetList:React.FC = () => {
    return (
      <SC.SocNetList>
        <li>
          <a
            href="https://www.facebook.com/sasha.berdichevsky"
            target="_blank"
            rel="noreferrer"
          >
            <FB />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/berd__man/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/O7bvkxqt2f8"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </li>
      </SC.SocNetList>
    );
}
 
export default SocNetList;