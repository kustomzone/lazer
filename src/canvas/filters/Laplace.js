import Convolve from 'canvas/filters/Convolve.js';

export default function Laplace (imageData) {

    return Convolve(imageData, [ -1, -1, -1, -1, 8, -1, -1, -1, -1 ]);
    
}