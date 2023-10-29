import { useMediaQuery } from "usehooks-ts";

import * as SC from "./MapStyled";

import map from "../../assets/images/maps_mob.jpg";
import mapTab from "../../assets/images/map_tab.jpg";
import mapDesk from "../../assets/images/map_desk.jpg"

const Map = () => {
  const isMobile = useMediaQuery("(min-width: 375px) and (max-width:767px)");

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width:1439px)");

  return (
    <div>
      <SC.MapWrapper>
        <img src={isMobile ? map : isTablet ? mapTab : mapDesk} alt="map" />
      </SC.MapWrapper>
    </div>
  );
};

export default Map;
