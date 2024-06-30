import React from 'react';
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";


const DishMap = ({ coordinates }) => {
    return (
        <YMaps>
            <Map defaultState={{ center: coordinates, zoom: 15 }}>
                <Placemark geometry={coordinates} />
            </Map>
        </YMaps>
    );
};

export default DishMap;
