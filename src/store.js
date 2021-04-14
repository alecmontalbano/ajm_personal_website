import { createRef } from 'react';
import { Vector3 } from 'three';

const state = {
    sections: 3,
    pages: 3,
    zoom: 75,
    images: ["/photo-bird.jpg", "/photo-moebius.jpg", "/photo-super.jpg"],
    top: createRef(),
    objects: [
        { x: 0, offset: 0.1, pos: new Vector3(), factor: 1.25 },
        { x: 0, offset: 1.1, pos: new Vector3(), factor: 1.5 },
        { x: 0, offset: 2.1, pos: new Vector3(), factor: 0.75 }
    ]
};

export default state;