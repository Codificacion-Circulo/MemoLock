import {Fragment} from 'react';
import {useParams} from 'react-router-dom'
import Remove from '../components/Remove'
import classes from './View.module.css'

const Revoke = props => {

  const params = useParams();

  return (
    <Fragment>
      <section className={classes.info}>

    <div className={classes.cards_wrapper}>
      <div className={classes.card_grid_space}>
        <Remove id={params.id}/>
      </div>
      </div>
  </section>
  </Fragment>
);
};



export default Revoke;