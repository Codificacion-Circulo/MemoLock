import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './LoadingSpinner.module.css';



const Backdrop = (props) => {
  return <div className={classes.backdrop}/>;
};


const portalElement = document.getElementById('overlays');
const LoadingSpinner = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes.loading}></div>,
        portalElement
      )}
    </Fragment>
  );

};



export default LoadingSpinner;