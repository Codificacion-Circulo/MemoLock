import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
function NavLinks(props) {
    return (
        <ul>
        <NavLink to='/home' activeClassName={classes.active} style={{ textDecoration: 'none'}} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>HOME</li>
        </NavLink>

        <NavLink to='/create' activeClassName={classes.active} style={{ textDecoration: 'none' }} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>WRITE</li>
        </NavLink>

        <NavLink to='/view/0' activeClassName={classes.active} style={{ textDecoration: 'none' }} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>VIEW</li>
        </NavLink>

        <NavLink to='/*' activeClassName={classes.active} style={{ textDecoration: 'none' }} onClick={() => props.isMobile && props.closeMobileMenu()}>
          <li>ABOUT</li>
        </NavLink>
        </ul>
    );
}

export default NavLinks;