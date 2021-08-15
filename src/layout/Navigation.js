import NavLinks from "./NavLinks";
import classes from './Header.module.css'

function Navigation() {
    return (
        <div className={classes.Navigation}>
        <NavLinks />
        </div>
    );
}

export default Navigation;