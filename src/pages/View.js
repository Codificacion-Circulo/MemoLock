import {Fragment} from 'react';
import {useParams} from 'react-router-dom'
// import LoadingSpinner from '../components/LoadingSpinner'
import classes from './View.module.css'
// import { useWeb3React } from "@web3-react/core"
// import { injected } from "../wallet/connectors"

const View =props => {

  // const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const params = useParams();

    return (
      <Fragment>
       {/* {isLoading&&<LoadingSpinner/>} */}
        <section className={classes.info}>
        <div className={classes.heading}>
            <h1>{params.id}</h1>
        </div>
      <div className={classes.cards_wrapper}>
        <div className={classes.card_grid_space}>
        </div>
        </div>
    </section>
    </Fragment>
    );
};

export default View;