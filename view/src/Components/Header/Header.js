import React from 'react';
import { connect } from 'react-redux';
import LoggonedUser from '../LoggonedUser/LoggonedUser';
import './Header.css';
import logo from './logo.png';

function Header(props) {
    const elem = props.user ? (
        <div className = 'header__loggoned-user'>
            <LoggonedUser user={props.user}/>
        </div>
        ) : (
            <div></div>
        )
    return (
        <div className='header'>
            <div className='header__logo-container'>
                <img src = {logo} className = 'header__logo' />
            </div>
            <div className = 'header__title'>
                <h1>АРМ - ЗВІТ</h1>
                <span>Головне управління Пенсійного фонду України в Черкаській області</span>
            </div>
            {elem}
        </div>
    )
}

const mapStateToProps = (state) => {
    const user = state.logon.loggedIn;
    return {
        user
    }
}

export default connect(mapStateToProps)(Header);

