import * as SC from "./MapStyled"

import map from "../../assets/images/maps_mob.jpg"

const Map = () => {
    return ( <div>
        <SC.MapWrapper>
            <img src={map} alt="map" />
        </SC.MapWrapper>
    </div> );
}
 
export default Map;