import * as SC from "./LocationPageStyled"

import Map from "../../components/Map/Map";
import ButtonLocation from "../../ui/ButtonLocation/ButtonLocation";

const LocationPage:React.FC = () => {
    return ( <SC.LocationPageStyled>
        <ButtonLocation/>
        <Map/>
    </SC.LocationPageStyled> );
}
 
export default LocationPage;