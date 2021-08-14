import {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import favicon from '../images/favicon.png'


const Header = props => {
    return (
    <Fragment>
       
    <header id="navbarr">
        <div className={classes.navbar} id="navbar">
            <div id="logo" className={classes.logo}>
               <img src={favicon} style={{width: '90px', height: '80px'}} alt="logo"/>
            </div>
            
            <ul>
            <NavLink to='/home' activeClassName={classes.active} style={{ textDecoration: 'none'}}>
              <li>HOME</li>
            </NavLink>

            <NavLink to='/create' activeClassName={classes.active} style={{ textDecoration: 'none' }}>
              <li>WRITE</li>
            </NavLink>

            <NavLink to='/view' activeClassName={classes.active} style={{ textDecoration: 'none' }}>
              <li>VIEW</li>
            </NavLink>

            <NavLink to='/*' activeClassName={classes.active} style={{ textDecoration: 'none' }}>
              <li>ABOUT</li>
            </NavLink>
            </ul>
        </div>
    </header>
    </Fragment>
    );
};



export default Header;