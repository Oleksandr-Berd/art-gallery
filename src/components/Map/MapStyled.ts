import styled from "@emotion/styled";

export const MapWrapper = styled.div`
width: 375px;
height: 550px;

margin-left: auto;
margin-right: auto;

@media (min-width: 768px){
    width: 768px;
    height: 600px;
}

& > img{
    width: 100%;
    height: 100%;
}

@media (min-width: 1440px){
    width: 1440px;
    height: 600px;
}

`