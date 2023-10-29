import * as SC from "./FooterStyled"

import SocNetList from "../../ui/SocNetList/SocNetList";
import { useLocation } from "react-router-dom";

const Footer:React.FC = () => {
const location = useLocation()

const path: string = location.pathname;

    return (
      <SC.FooterStyled pathName={path === "/location" ? "location" : "home"}>
        <SC.ContentWrapper
          pathName={path === "/location" ? "location" : "home"}
        >
          <h2>modern</h2>
          <h2>art gallery</h2>
          <p>
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
        </SC.ContentWrapper>
        <SocNetList />
      </SC.FooterStyled>
    );
}
 
export default Footer;