import * as SC from "./AddressStyled"

const Address:React.FC = () => {
    return (
      <SC.CommonCon>
        <SC.Title>our location</SC.Title>
        <div>
          <SC.Street>99 king street</SC.Street>
          <SC.AddressWrapper>
            <p>Newport</p>
            <p>RI 02840</p>
            <p>United States of America</p>
          </SC.AddressWrapper>
          <SC.Text>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </SC.Text>
        </div>
      </SC.CommonCon>
    );
}
 
export default Address;