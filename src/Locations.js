import React from 'react';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker, InfoWindow, InfoBox } from '@react-google-maps/api';
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "60vh"
    
};
const center = {
    lat: 44.962950,
    lng: -93.182013
};
const styles = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const storeOne = {
    lat:44.970304,
    lng:-93.182184,
}
const storeTwo = {
    lat: 44.957346,
    lng: -93.322546,
}

const onLoad = marker => {
    console.log('marker: ', marker)
  }



const Styled = styled.div` {

    #locationTitle {
        font-family: Dosis;
        text-align: center;
        margin-top: 5%;
        padding-bottom: 30px;
        margin-top: 20px;
    }

    #floatDiv {
    border: 3px solid #fff;
    padding: 20px;
    text-align: center;
    font-family: Dosis;
    width: 70%;
    margin-left: 15%;
    }

    .floatChild {
    width: 50%;
    float: left;
    
}  


}
`;

export default function Locations() {


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps"

    



    return (
        

            <Styled>

                <h2 id="locationTitle">Our Locations</h2>

            
            <GoogleMap id="map"

                    mapContainerStyle={mapContainerStyle}
                    zoom={12} 
                    center={center}
                    options={styles}

            >

            <Marker
                position={storeOne}
                
            />
            <Marker
                position={storeTwo}
            />
            </GoogleMap>
                <div id="floatDiv">
                    <div class="floatChild">
                
                        <h2>Minneapolis Location</h2>
                        <p>1234 Lake Lane</p>
                        <p>Minneapolis, MN, 11111</p>
                        <p>Right on the corner of ABC and ABC!</p>
                    </div>

                    <div class="floatChild">
                        <h2>St. Paul Location</h2>
                        <p>1234 Lake Lane</p>
                        <p>Minneapolis, MN, 11111</p>
                        <p>Right on the corner of ABC and ABC!</p>
                    </div>
                </div>
            </Styled>
        
    )
};












                


    




