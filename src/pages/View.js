import {Fragment,useState,useCallback, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import classes from './View.module.css'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/connectors"
const Cryptr = require('cryptr');



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const View =props => {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [blog,setBlogs]=useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  
      const fetchBlogs=useCallback(async()=>{
        setIsLoading(true);
        setError(null);
        await activate(injected)
        if(active){
          try{
            const cryptr = new Cryptr('123');
            const decryptedString = cryptr.decrypt(params.id);
            console.log(decryptedString)
            const response = await fetch(`${decryptedString}`,requestOptions);
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.url;
            console.log(data)
            setBlogs(data)
          }catch(error){
            setError(error.message);
          }
          setIsLoading(false)
        }
        
      },[active,account]);
    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs])

    return (
      <Fragment>
       {isLoading&&<LoadingSpinner/>}
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