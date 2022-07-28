
import React, { useEffect, useState } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet/Popup'
import { Marker } from 'react-leaflet/Marker'
import AnimateLetters from './../AnimateLetters/AnimateLetters';

import './style.scss';

const Contact = () => {
    const data = {
        title: 'Contact Me',
    }

    const position = [28.499408, 30.792526]

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, [])

    return (
        <div className='w-full h-full border'>
        </div>
    );
}

export default Contact;
