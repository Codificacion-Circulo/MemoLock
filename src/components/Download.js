import {Fragment,useState,useEffect,useCallback, useEffec } from "react";
import {Link,useParams} from 'react-router-dom'
import "./FileUpload.css";
import { create } from "ipfs-http-client";
import Web3 from 'web3'
import { lock_addr,lock_abi } from "../wallet/config";
import LoadingSpinner from "./LoadingSpinner";
import download from "../images/download.png";
const Cryptr = require("cryptr");
const client = create("https://ipfs.infura.io:5001/api/v0");



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const FileUpload = (props) => {
    const [name,setName]=useState(props.id)
    const [password,setPassword]=useState('')
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [account, setAccount] = useState('');
    const [lockk,setLockk] = useState({})
    const openLink = (url) => window.open(url,'download')?.focus();
    const loadBlockhainData=async()=>{
      const web3 = new Web3(Web3.givenProvider || "https://localhost:7545");
      const accounts=await web3.eth.getAccounts()
      setAccount(accounts[0])
      console.log(account)
      const lock=new web3.eth.Contract(lock_abi,lock_addr)
      setLockk(lock)
      
    };
    useEffect(() => {
      loadBlockhainData();
    },[account])
    
        const formSubmission=async(e)=>{
          e.preventDefault();
          setUploading(true);

          if(!name||!password){return}
            try{
              const cryptr = new Cryptr(password);
              console.log('started')
              const link=await lockk.methods.getlink(name-1).call()
              console.log(link)
              const decryptedString = cryptr.decrypt(link);
              console.log(decryptedString)
              const response = await fetch(`${decryptedString}`,requestOptions);
              if (!response.ok) {
                throw new Error('Something went wrong!');
              }
              const data = await response.url;
              console.log(data)
              openLink(data)
            }catch(error){
              setError(error);
            }
            setUploading(false)
  
          
        };

      const nameChangeHandler = (event) => {
        setName(event.target.value);
      };
    
      const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
      };

  return (
    <Fragment>
      {uploading && <LoadingSpinner />}
      <div className="updown">
        <form onSubmit={formSubmission} className="form-down">
          <div class="row">
            <h2 class="details">Details</h2>
            <div class="input_field authtitle">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="File ID"
                required="true"
                onChange={nameChangeHandler}
                value={name}
              />
            </div>
          </div>
          <div class="row">
            <h2 class="details">Password</h2>
            <div class="input_field">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required="true"
                onChange={passwordChangeHandler}
                value={password}
              />
            </div>
          </div>

          <div class="row">
            <input
              type="submit"
              value="Download"
              class="btn"
              disabled={!password && !name}
            ></input>
            <Link to="/" class="btn">
              Cancel
            </Link>
          </div>
        </form>
        <div className="img-con-down">
          <img src={download} alt="upload" className="down-img" />
        </div>
      </div>
    </Fragment>
  );
};

export default FileUpload;
