import {Fragment} from "react"
import Modal from './Modal';
import classes from './Card.module.css';
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <Modal onClose={props.onClose}>
       {props.link&&<h4 className={classes.Head}>NOTICE !<span className={classes.Headspan}> &nbsp;-&nbsp;Save this link for future use.</span> </h4>}
       {props.msg&&<h4 className={classes.Head}>Error !<span className={classes.Headspan}> &nbsp;-&nbsp;Please check the details</span> </h4>}
       <div className={classes.total}>
        {props.link&&<p>File ID - <span>{props.link}</span></p>}
      </div>
      <div className={classes.total}>
        {props.msg&&<h1>Something went wrong !</h1>}
        {props.link&&<Fragment><p>Download Address</p><Link to={`download/${props.link}`}>{`http://localhost:3000/download/${props.link}`}</Link></Fragment>}
        </div>
        <div className={classes.total}>
        {props.link&&<Fragment><p>Revoke Address</p><Link to={`revoke/${props.link}`}>{`http://localhost:3000/revoke/${props.link}`}</Link></Fragment>}
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};
export default Card;

