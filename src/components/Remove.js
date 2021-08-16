import { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./FileUpload.css";
import Web3 from 'web3'
import { lock_addr, lock_abi } from "../wallet/config";
import LoadingSpinner from "./LoadingSpinner";
import remove from '../images/remove.png';




const Remove = (props) => {
  const [name, setName] = useState(props.id)
  const [password, setPassword] = useState('')
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [account, setAccount] = useState('');
  const [lockk, setLockk] = useState({})

  const loadBlockhainData =async () => {
    const web3 = new Web3(Web3.givenProvider || "https://localhost:7545");
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const lock =await new web3.eth.Contract(lock_abi, lock_addr)
    setLockk(lock)
  };
  useEffect(() => {
    loadBlockhainData();
  }, [account])

  const formSubmission = async (e) => {
    e.preventDefault();
    if (!password || !name) {
      console.log("Please Fill the correct Details");
      return;
    }
    setUploading(true);
    try {
      console.log('started')
      console.log(name,password,account)
      const recipt = await lockk.methods.removegrant(name-1,password).send({ from: account})
      console.log(recipt)
    } catch (err) {
      setError(err);
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

  return (
    <Fragment>
      {uploading && <LoadingSpinner />}
      <div className="updown">
        <div className="img-con-down">
          <img src={remove} alt="upload" className="down-img" />
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
            <h2 className="details">Address</h2>
            <div className="input_field">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Address to Revoke"
                required={true}
                onChange={passwordChangeHandler}
                value={password}
              />
            </div>
          </div>

          <div className="row">
            <input
              type="submit"
              value="Revoke"
              className="btn"
              disabled={!password && !name}
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

export default Remove;
