import React from 'react';
import './Header.css';
import logo from './logo.png';
import gerb from './gerb.png';

export default function Header() {
    return (
        <div className='header'>
            <div className = 'header__logo'>
                <img src = {logo} className = "logo__top" />
                <img src = {gerb} className = "logo__layout" />
            </div>
            <div className = 'header__title'>
                <h1>АРМ - ЗВІТ</h1>
                <span>Головне управління Пенсійного фонду України в Черкаській області</span>
            </div>
        </div>
    )
}

