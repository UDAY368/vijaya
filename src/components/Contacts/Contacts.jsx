import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contacts = () => {
  return (
    <section className="cnt-wrapper">
      <div className="padding innerWidth flexCenter cnt-container">
        {/* left side */}
        <div className="flexColStart cnt-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good <br />
            blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">7901518381</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">7901518381</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">office@sve.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Sent Email</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsLinkedin size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">LinkedIn</span>
                    <span className="secondaryText">linkedIn Id</span>
                  </div>
                </div>
                <div className="flexCenter button">Connect Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="cnt-right flexCenter-img-c">
          <div className="image-container">
            <img src="./contacts.jpg" alt="Contacts" height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
