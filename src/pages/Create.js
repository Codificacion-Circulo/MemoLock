import React, {useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/connectors"
import './Create.css'
import FileUpload from '../components/FileUpload'
import Download from '../components/Download';
import File from 'mock-fs/lib/file';

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


    return (
        <div class="write__container">
           <FileUpload />
        </div>
    );
};
export default Create;