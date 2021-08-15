import {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import favicon from '../images/favicon.png'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


const Header = props => {
    return (
    <Fragment>
       
    <header id="navbarr">
        <div className={classes.navbar} id="navbar">
            <div id="logo" className={classes.logo}>
               <img src={favicon} style={{width: '90px', height: '80px'}} alt="logo"/>
            </div>
            <MobileNavigation />
            <Navigation />

        </div>
    </header>
    </Fragment>
    );
};



export default Header;
