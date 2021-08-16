import {Fragment,useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import "./FileUpload.css";
import Web3 from 'web3'
import { lock_addr,lock_abi } from "../wallet/config";
import LoadingSpinner from "./LoadingSpinner";
import Card from "./Card";
import download from "../images/download.png";
const Cryptr = require("cryptr");



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const Download = (props) => {
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
      const lock=new web3.eth.Contract(lock_abi,lock_addr)
      setLockk(lock)
      
    };
    useEffect(() => {
      loadBlockhainData();
    },[account])
    
        const formSubmission=async(e)=>{
          e.preventDefault();
          setUploading(true);

          if(!name||!password){
            setError('Please Fill the correct Details')
            return
          }
            try{
              const cryptr = new Cryptr(password);
              const link=await lockk.methods.getlink(name-1).call()
              const decryptedString = cryptr.decrypt(link);
              const response = await fetch(`${decryptedString}`,requestOptions);
              if (!response.ok) {
                throw new Error('Something went wrong!');
              }
              const data = await response.url;
              openLink(data)
              setName('')
              setPassword('')
            }catch(error){
              setError('Something went wrong !');
              setPassword('')
              setName('')
              console.log(error)
            }
            setUploading(false)
  
          
        };

      const nameChangeHandler = (event) => {
        setName(event.target.value);
      };
    
      const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
      };
      const messageChangeHandler = () => {
        setError(null);
      };

  return (
    <Fragment>
      {uploading && <LoadingSpinner />}
      {error && <Card onClose={messageChangeHandler} msg={error} />}
      <div className="updown">
      <div className="img-con-down">
        <img src={download} alt="upload" className="down-img" />
      </div>
        <form onSubmit={formSubmission} className="form-up">
          <div className="row">
            <h2 className="details">File ID</h2>
            <div className="input_field authtitle">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="File ID"
                required={true}
                onChange={nameChangeHandler}
                value={name}
              />
            </div>
          </div>
          <div className="row">
            <h2 className="details">Password</h2>
            <div className="input_field">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required={true}
                onChange={passwordChangeHandler}
                value={password}
              />
            </div>
          </div>

          <div className="row">
            <input
              type="submit"
              value="Download"
              className="btn"
              disabled={!password || !name ||!account}
            ></input>
            <Link to="/" className="btn">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Download;
