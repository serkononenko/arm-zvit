import React from 'react';
import './Image.css'

export default function Image() {
    return (
        <svg className='figure-img img-fluid rounded Image__svg' width="100%" height="250px" xmlns = "http://www.w3.org/2000/svg"  role="img">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
        </svg>
    )
}


