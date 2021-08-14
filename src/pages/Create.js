import React, { useState,useEffect } from 'react';
import { create } from 'ipfs-http-client';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/connectors"
import './Create.css'
import { Link } from 'react-router-dom';
const client = create('https://ipfs.infura.io:5001/api/v0')


const Create = props => {

    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
      try {
        await activate(injected)
        
      } catch (ex) {
        console.log(ex)
      }
    }
    useEffect(() => {
        connect()}, [account])

        
    const addQuote=(quoteData) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(quoteData);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://memoir-node-app.herokuapp.com/users/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');


  
    const formSubmission=async (e)=>{
        e.preventDefault();
        if (text.trim().length === 0 || author.trim().length === 0 || title.trim().length === 0) {
            return;
        }
        try {
            const doc = JSON.stringify({
                title,author,text,
              });
            const added = await client.add(doc);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            addQuote({address:account,token:url})
          } catch (error) {
            console.log('Error uploading file: ', error)
          }  
       
        setTitle('');
        setAuthor('');
        setText('')
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }


    const authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }

    const textChangeHandler = (event, editor) => {
        const data = editor.getData();
        setText(data);
    }

    return (
        
        <div class="write__container">
            <form onSubmit={formSubmission}>
                <div class="row">
                    <h2 class="details">Details</h2>
                    <div class="input_field authtitle">
                        <input type="text" id="title" name="title" placeholder="Title" required="true" onChange={titleChangeHandler} value={title} />
                        <input type="text" id="author" name="author" placeholder="Author" required="true" onChange={authorChangeHandler} value={author} />
                    </div>
                </div>
                
                
                <div class="row">
                    <div class="input_field">
                        <h1>Tell Us Your Story</h1>
                    </div>
                </div>
                <div class="row">
                {active ?  <input type="submit" value="Submit" class="btn"></input> : <span>Not connected</span>}
                    <Link to="/" class="btn">Cancel</Link>
                </div>
            </form>
        </div>
    );
};
export default Create;