import React from "react";
import Faq from "react-faq-component";
import './Faqs.css'

const data = {
    rows: [
        {
            title: "What is NFT ?",
            content: `NFT are non fungible token It is documentation of ownership of one of a kind digital asset. 
            Usually it is referred as digital art and can represent anything from pictures to a piece of virtual land.  A NFT is code stored on blockchain  that points to the exact location the data is stored. `,
        },
        {
            title: "Where is the data stored ?",
            content:
                "The data is stored in IPFS which is like a decentralized cloud based system. more about ipfs here.",
        },
        {
            title: "Why is fees requiered to convert my blog to nft ?",
            content: `For stroing the nft on blockchain a nft needs to be minted and thus minitng fees and gas fees is required to be payed for creating a NFT`,
        },
        {
            title: "Where will my blog go once I mint it ?",
            content: `Your blog will go to your wallet in form of NFT which you can sell on OpenSea of keep it as a Memoir `,
        },
        {
            title: "How do i mint a nft ?",
            content: `You just click on mint NFT and let your metamask wallet get connected and it will automatically tell you to confirm the payment.`,
        },
        {
            title: "What do you mean by I am the owner of data ?",
            content: `We at memoir is in no control of your data as we dont store it on our own server and thus you get full copyright of your data and if someone tries to copy your data you could give a proof this data is yours with IPFS hash.`,
        }
    ]
};

const styles = {
    rowTitleTextSize: '1.2rem',
    rowTitleColor: "blue",
    rowContentColor: 'white',
    rowContentTextSize: '1.3rem',
    arrowColor: "#05ffa1",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

const Faqs = props => {
    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default Faqs;