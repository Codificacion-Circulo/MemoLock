import {Fragment} from 'react'
import Tilt from 'react-parallax-tilt';
import ethereum from '../images/ethereum1.png'
import ipfs from '../images/ipfs.png';
import Faqs from '../components/Faqs'
import './Home.css'



const Home = () => {


   

    return (
        <Fragment>
        <section id="home" className="home">
        <div className="home-con">
       
            <h1>Create a blog and share your voice in minutes.</h1>
            <h2>Extracting your center of creativity and preserving it forever on the blockchain.</h2>
        </div>
    </section>

    <section id="features" className="features">
        <div className="heading">
            <h1>FEATURES</h1>
        </div>
        <div className="container">
        <Tilt className="parallax-effect" perspective={1000}>
        
            <div className="card" >
            <div className="inner-element">
                <div className="card_img"><i className="fab fa-ethereum"></i></div>
                <h1>NFT</h1>
                <p>
                    Convert blogs to nfts.
                </p>
            </div>
            </div>
        </Tilt>
        <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
             <div className="inner-element">
                <div className="card_img"><i className="fas fa-file-archive"></i></div>
                <h1>Immutable</h1>
                <p>
                    Remains unchanged.
                </p>
            </div>
            </div>
            </Tilt>
            <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
             <div className="inner-element">
                <div className="card_img"><i className="fas fa-crown"></i></div>
                <h1>Sole Proprietary </h1>
                <p>
                    Exclusive owner of blog.
                </p>
            </div>
            </div>
            </Tilt>
            <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
             <div className="inner-element">
                <div className="card_img"><i className="fas fa-shield-alt"></i></div>
                <h1>Enduring</h1>
                <p>
                    Secure on blockchain forever.
                </p>
            </div>
            </div>
            </Tilt>
            <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
             <div className="inner-element">
                <div className="card_img"><i className="fas fa-user-secret"></i></div>
                <h1>Anonymous</h1>
                <p>
                    Keep your identity private.
                </p>
            </div>
            </div>
            </Tilt>
        </div>
        
    </section>

    <section id="tech" className="tech">
        <div className="tech-con">
            <div className="tech-heading">
                <h1>TRUE OWNERSHIP</h1>
            </div>
            <div className="tech-para">
                <p>Stored on IPFS and Secured by Ethereum Blockchain</p>
            </div>
            <div className="tech-icons">
            <img src={ethereum} alt="etherium"/>
                <img src={ipfs} alt="ipfs" style={{width:'125px', height:'125px'}}/>
            </div>
            <div className="tech-btn">
                <button><a href="ipfs.com">Know More</a><i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </section>

    <section id="faq" className="faq">
    <div className="faq-heading">
                <h1>FAQs</h1>
            </div>
       <Faqs/>
    </section>
        </Fragment>
    )
}
export default Home