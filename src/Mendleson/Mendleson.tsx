import logo from "../assets/logo-1.svg";
import asset1 from "../assets/Asset 1.svg";
import asset2 from "../assets/Asset 2.svg";
import group1 from "../assets/Group 1.svg";
import asset4 from "../assets/Assets 4.svg";
import "./Mendleson.css";
import AboutSection from "./AboutSection";
import Services from "./Services";
import Footer from "./Footer";
function Mendleson() {
  return (
    <div className="page-container">
      <div className="background">
        <img src={asset1} alt="" className="background-image background-left" />

        <img
          src={asset2}
          alt=""
          className="background-image background-right"
        />
      </div>

      <header className="content-overlay">
        <img src={logo} alt="Logo" className="logo" />

        <ul className="navigation-items">
          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          {/* <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li> */}

          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </header>

      <section id="home" className="home-section">
        <div className="home-content">
          <div className="content-text-home">
            Mendleson
            <br />
            Communication
            <br />
            and Engagement
          </div>

          <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-malesuada-sed-ipsum-ut-quam-volutpat-tortor">
            <span className="loremipsumdolorsitametconsecteturadipiscingelitmalesuadasedipsumutquamvolutpattortor_span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              sed ipsum, ut quam volutpat, tortor.
            </span>
          </div>
        </div>

        {/* Bottom decorative assets */}
        <img src={asset4} alt="" className="home-asset-bottom-right" />

        <img src={group1} alt="" className="home-asset-bottom-left" />
      </section>

      <AboutSection />

      <Services />

      {/* <section id="team" className="team-section" /> */}

      {/* <section id="projects" className="projects-section" /> */}
      {/* <section id="clients" className="clients-section" /> */}

      {/* <section id="contact" className="clients-section" /> */}
      <Footer />
    </div>
  );
}

export default Mendleson;
