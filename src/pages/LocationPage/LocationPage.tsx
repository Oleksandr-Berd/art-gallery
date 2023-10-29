import * as SC from "./LocationPageStyled"

import Map from "../../components/Map/Map";
import ButtonLocation from "../../ui/ButtonLocation/ButtonLocation";
import Address from "../../components/Address/Address";

const LocationPage:React.FC = () => {
    return ( <SC.LocationPageStyled>
        <ButtonLocation/>
        <Map/>
        <Address/>
    </SC.LocationPageStyled> );
}
 
export default LocationPage;