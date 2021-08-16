import { Fragment, useState,useEffect } from "react";
import "./FileUpload.css";
import { Link } from "react-router-dom";
import { create } from "ipfs-http-client";
import Card from "../components/Card";
import LoadingSpinner from "./LoadingSpinner";
import upload from "../images/upload.png";
import Web3 from 'web3'
import { lock_addr,lock_abi } from "../wallet/config";
const Cryptr = require("cryptr");
const client = create("https://ipfs.infura.io:5001/api/v0");

const FileUpload = (props) => {
  const [name, setName] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [file, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [modal, setModal] = useState(false);
  const [account, setAccount] = useState('');
  const [lockk,setLockk] = useState({})
  const [count,setCount] = useState(0)


  const loadBlockhainData=async()=>{
    const web3 = new Web3(Web3.givenProvider || "https://localhost:7545");
    const accounts=await web3.eth.getAccounts()
    setAccount(accounts[0])
    const lock=new web3.eth.Contract(lock_abi,lock_addr)
    setLockk(lock)
  };
  useEffect(() => {
    loadBlockhainData();
  }, [account])

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const formSubmission = async (e) => {
    e.preventDefault();
    if (!password === cpassword || !name || !file) {
      setMessage("Please Fill the correct Details");
      return;
    }
    
    setUploading(true);
    const cryptr = new Cryptr(cpassword);
    try {
      const options = {
        wrapWithDirectory: true,
      };
      const files = [{ path: filename, content: file }];
      const added = await client.add(files, options);
      const url = `https://ipfs.infura.io/ipfs/${added.cid.toString()}/${filename}`;
      const encryptedString = cryptr.encrypt(url);
      const recipt=await lockk.methods.fileURI(encryptedString,name).send({from:account})
      console.log(recipt);
      const tokenId=await lockk.methods.tokenCounter().call()
      setCount(tokenId);
      setModal(true);
    } catch (error) {
      console.log("Error uploading file: ", error);
      setMessage("Something went Wrong!");
    }
    setTimeout(() => setMessage(""), 10000);
    setName("");
    setCPassword("");
    setPassword("");
    setFilename("Choose a file");
    setFile("");
    setUploading(false);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const cpasswordChangeHandler = (event) => {
    setCPassword(event.target.value);
  };
  const modalChangeHandler = () => {
    setModal(false);
  };
  const messageChangeHandler = () => {
    setMessage(null);
  };

  return (
    <Fragment>
      {uploading && <LoadingSpinner />}
      {message && <Card onClose={messageChangeHandler} msg={message}/>}
      {modal && <Card onClose={modalChangeHandler} link={count} />}
      <div className="updown">
        <div className="img-con-up">
          <img src={upload} alt="upload" className="up-img" />
          <div className="row">
            <div className="input_field">
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
              />
              <label htmlFor="customFile">{filename}</label>
            </div>
          </div>
        </div>
        <form onSubmit={formSubmission} className="form-up">
          <div className="row">
            <h2 className="details">Reciver Details</h2>
            <div className="input_field authtitle">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Reciver's Account ID"
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
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
                required={true}
                onChange={cpasswordChangeHandler}
                value={cpassword}
                disabled={!password}
              />
            </div>
          </div>

          <div className="row">
            <input
              type="submit"
              value="Submit"
              className="btn"
              disabled={!password === cpassword || !name || !file}
            ></input>
            <Link to="/" className="btn">
              Cancel
            </Link>
          </div>
        </form>
      </div>
      <p>{message}</p>
    </Fragment>
  );
};

export default FileUpload;
