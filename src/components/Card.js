import Modal from './Modal';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <Modal onClose={props.onClose}>
       <h4 className={classes.Head}>WARNING!<span className={classes.Headspan}>-This is a Secure Link Password Protected</span> </h4>
      <div className={classes.total}>
        <span>{`http://localhost:3000/view/${props.link}`}</span>
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

