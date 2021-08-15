import { Fragment } from "react";
import Tilt from "react-parallax-tilt";
import ethereum from "../images/ethereum1.png";
import ipfs from "../images/ipfs.png";
import Faqs from "../components/Faqs";
import file1 from "../images/file1.png";
import file2 from "../images/file2.png";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>

      <section id="home" className="home">
        <div className="home-con">
          <h1>
            Securing files and preserving it on
            the blockchain.
          </h1>
          <h2>Easily share files with anyone, access anywhere and anytime</h2>
          <div className="home-img">
            <img
              src={file1}
              alt="file"
              className="home-img1"
            //   style={{ width: "48%", height: "80%" }}
            />
            <img
              src={file2}
              alt="file"
              className="home-img2"
            //   style={{ width: "30%", height: "50%" }}
            />
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="heading">
          <h1>FEATURES</h1>
        </div>
        <div className="container">
          <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
              <div className="inner-element">
                <div className="card_img">
                  <i className="fab fa-ethereum"></i>
                </div>
                <h1>Blockchain</h1>
                <p>Share effortlessly.</p>
              </div>
            </div>
          </Tilt>
          <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
              <div className="inner-element">
                <div className="card_img">
                  <i className="fas fa-file-archive"></i>
                </div>
                <h1>Immutable</h1>
                <p>Completely decentralised</p>
              </div>
            </div>
          </Tilt>
          <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
              <div className="inner-element">
                <div className="card_img">
                  <i className="fas fa-crown"></i>
                </div>
                <h1>Sole Proprietary </h1>
                <p>Exclusive owner of your file.</p>
              </div>
            </div>
          </Tilt>
          <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
              <div className="inner-element">
                <div className="card_img">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h1>Enduring</h1>
                <p>Secure on blockchain forever.</p>
              </div>
            </div>
          </Tilt>
          <Tilt className="parallax-effect" perspective={1000}>
            <div className="card">
              <div className="inner-element">
                <div className="card_img">
                  <i className="fas fa-user-secret"></i>
                </div>
                <h1>Anonymous</h1>
                <p>Keep your identity private.</p>
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
            <img src={ethereum} alt="etherium" />
            <img
              src={ipfs}
              alt="ipfs"
              style={{ width: "125px", height: "125px" }}
            />
          </div>
          <div className="tech-btn">
            <button>
              <a href="ipfs.com">Know More</a>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="faq-heading">
          <h1>FAQs</h1>
        </div>
        <Faqs />
      </section>
    </Fragment>
  );
};
export default Home;
