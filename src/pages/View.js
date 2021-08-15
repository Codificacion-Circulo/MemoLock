import {Fragment,useState,useCallback, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import classes from './View.module.css'
import Download from '../components/Download'
const Cryptr = require('cryptr');



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const View =props => {

  // const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [blog,setBlogs]=useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  
      const fetchBlogs=useCallback(async()=>{
        setIsLoading(true);
        setError(null);
        // await activate(injected)
        if(true){
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
        
      },[]);
    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs])

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