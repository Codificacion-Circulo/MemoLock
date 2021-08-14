import {Fragment} from 'react';
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

const Layout = props => {

    
    return (
        <Fragment>
        <div id="particles-js"></div>
            <Header/>
            {props.children}
            <Footer/>
            
        </Fragment>
    );
};

Layout.propTypes = {
    
};

export default Layout;