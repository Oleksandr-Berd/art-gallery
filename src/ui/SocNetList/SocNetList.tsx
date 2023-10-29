import * as SC from "./SocNetListStyled"

import {ReactComponent as FB} from "../../assets/images/fb.svg"
import { ReactComponent as Insta } from "../../assets/images/insta.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { useLocation } from "react-router-dom";


const SocNetList:React.FC = () => {
    const location = useLocation();

    const path: string = location.pathname;
    return (
      <SC.SocNetList>
        <li>
          <a
            href="https://www.facebook.com/sasha.berdichevsky"
            target="_blank"
            rel="noreferrer"
          >
            <FB fill={path === "/location" ? "#151515" : "#fff"} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/berd__man/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta fill={path === "/location" ? "#151515" : "#fff"} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/O7bvkxqt2f8"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter fill={path === "/location" ? "#151515" : "#fff"} />
          </a>
        </li>
      </SC.SocNetList>
    );
}
 
export default SocNetList;