import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
function NavLinks(props) {
    return (
        <ul>
        <NavLink to='/home' activeClassName={classes.active} style={{ textDecoration: 'none'}} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>HOME</li>
        </NavLink>

        <NavLink to='/upload' activeClassName={classes.active} style={{ textDecoration: 'none' }} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>UPLOAD</li>
        </NavLink>

        <NavLink to='/revoke/0' activeClassName={classes.active} style={{ textDecoration: 'none' }} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>REVOKE</li>
        </NavLink>
        
        <NavLink to='/download/0' activeClassName={classes.active} style={{ textDecoration: 'none' }} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>DOWNLOAD</li>
        </NavLink>

      
        </ul>
    );
}

export default NavLinks;