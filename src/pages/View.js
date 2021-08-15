import {Fragment} from 'react';
import {useParams} from 'react-router-dom'
import Download from '../components/Download'
import classes from './View.module.css'

const View =props => {

  const params = useParams();

    return (
      <Fragment>
        <section className={classes.info}>
      <div className={classes.cards_wrapper}>
        <div className={classes.card_grid_space}>
          <Download id={params.id}/>
        </div>
        </div>
    </section>
    </Fragment>
    );
};

export default View;