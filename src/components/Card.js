import Modal from './Modal';
import classes from './Card.module.css';
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <Modal onClose={props.onClose}>
       <h4 className={classes.Head}>NOTICE!<span className={classes.Headspan}> &nbsp;-&nbsp;Save this link for future use.</span> </h4>
      <div className={classes.total}>
        <Link to={`http://localhost:3000/view/${props.link}`}>{`http://localhost:3000/view/${props.link}`}</Link>
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

