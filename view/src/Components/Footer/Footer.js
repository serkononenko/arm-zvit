import React from 'react';
import './Footer.css';

import node from './node.png';
import react from './react.png';
import redux from './redux.png';
import mongo from './mongo.svg';
import webpack from './webpack.svg';
import bootstrap from './bootstrap.png';

export default function Footer() {
    return (
        <div className='container-fluid fixed-bottom bg-success py-2 Footer'>
            <footer className='row align-items-center'>
                <div className='col'>
                    <img src={node} className='img-fluid'/>
                </div>
                <div className='col'>
                    <img src={react} className='img-fluid'/>
                </div>
                <div className='col'>
                    <img src={bootstrap} className='img-fluid'/>
                </div>
                <div className='col'>
                    <img src={redux} className='img-fluid'/>
                </div>
                <div className='col'>
                    <img src={mongo} className='img-fluid'/>
                </div>
                <div className='col'>
                    <img src={webpack} className='img-fluid'/>
                </div>
            </footer>
        </div>
    );
}