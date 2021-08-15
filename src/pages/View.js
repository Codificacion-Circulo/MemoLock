import {Fragment} from 'react';
import {useParams} from 'react-router-dom'
// import LoadingSpinner from '../components/LoadingSpinner'
import classes from './View.module.css'

const View =props => {

  // const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const params = useParams();

    return (
      <Fragment>
        <section className={classes.info}>
        <div className={classes.heading}>
            <h1>Download</h1>
        </div>
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