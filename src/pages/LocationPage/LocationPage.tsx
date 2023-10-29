import * as SC from "./LocationPageStyled"

import Map from "../../components/Map/Map";
import ButtonLocation from "../../ui/ButtonLocation/ButtonLocation";
import Address from "../../components/Address/Address";
import Footer from "../../layouts/Footer/Footer";

const LocationPage:React.FC = () => {
    return ( <SC.LocationPageStyled>
        <ButtonLocation/>
        <Map/>
        <Address/>
        <Footer/>
    </SC.LocationPageStyled> );
}
 
export default LocationPage;