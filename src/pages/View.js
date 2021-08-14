import React, {useState,useCallback, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import classes from './View.module.css'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/connectors"



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const View =props => {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [blog,setBlogs]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();


      const fetchBlogs=useCallback(async()=>{
        setIsLoading(true);
        setError(null);
        await activate(injected)
        if(active){
          try{
              console.log(params)
            const response = await fetch(`https://memoir-node-app.herokuapp.com/users/${account}`, requestOptions);
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.json();
            console.log(data.token)
            const Data=await fetch(`${data.token}`,requestOptions);
            const ipfs=await Data.json()
            setBlogs(ipfs)

            // const transformedBlogs =ipfs.map((blogData) => {
            //    return {
            //      title: blogData.title,
            //      author: blogData.author,
            //      text: blogData.text,
            //    }
            // })
            // setBlogs(transformedBlogs)
            console.log(ipfs.title,ipfs.author,ipfs.text)
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
        <section className={classes.info}>
        <div className={classes.heading}>
            <h1>{params.id}</h1>
        </div>
      <div className={classes.cards_wrapper}>
        <div className={classes.card_grid_space}>
        </div>
        </div>
    </section>
    );
};

export default View;