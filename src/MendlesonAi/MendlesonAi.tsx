import logo from "../assets/logo-1.svg";
import heroAsset from "../assets/Asset 1.svg";
import aboutAsset from "../assets/Asset 2.svg";
import engagementIcon from "../assets/Enagagement icon 1.svg";
import communicationIcon from "../assets/coomunication icon 1.svg";

// Service illustrations
import serviceEngImg from "../assets/Asset 5 1.svg";
import serviceComImg from "../assets/Asset 5 2.svg";
import serviceFacImg from "../assets/Asset 6 1.svg";
import serviceConImg from "../assets/Asset 7 1.svg";
import serviceTrnImg from "../assets/Asset 8 2.svg";

// Team photos
import person1 from "../assets/Person 1 img 1.svg";
import person2 from "../assets/Person 2 img 1.svg";
import person3 from "../assets/Person 3 img 1.svg";

// Project images
import projectBgImg from "../assets/Layer 19.svg";
import projectImg2 from "../assets/Layer 20.svg";
import projectImg3 from "../assets/Layer 21.svg";

// Client logos
import boroondaraLogo from "../assets/Group 1.svg";
import portPhillipLogo from "../assets/Group 12.svg";
import brigitteLogo from "../assets/1280px-Brigitte-Logo.svg";
import crossingLogo from "../assets/Layer 22.svg";
import bhpLogo from "../assets/BHP_2017_logo.svg";
import victoriaLogo from "../assets/Layer 23.svg";
import pacificLogo from "../assets/Layer 24.svg";
import melbourneWaterLogo from "../assets/MelbourneWaterLogo-1024x282.svg";

import "./MendlesonAi.css";

export default function MendlesonAi() {
  return (
    <div className="mendleson-container">
      {/* Header / Navigation */}
      <header className="mendleson-header">
        <img src={logo} alt="Mendleson Logo" className="mendleson-logo" />
        <ul className="mendleson-nav">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact" className="contact-nav-btn">
              Contact Us
            </a>
          </li>
        </ul>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <img
            src={heroAsset}
            alt="Hero Illustration"
            className="hero-illustration"
          />
        </div>
        <div className="hero-right">
          <h1>Mendleson Communication and Engagement</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            sed ipsum, ut quam volutpat, tortor.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-left">
            <img
              src={aboutAsset}
              alt="About Us 3D Illustration"
              className="about-image"
            />
          </div>
          <div className="about-right">
            <h2>ABOUT US</h2>
            <p className="about-desc">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creativity,
              results and exceptional levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>
            <div className="about-sub-cards">
              <div className="sub-card">
                <div className="sub-card-header">
                  <img
                    src={engagementIcon}
                    alt="Engagement Icon"
                    className="sub-card-icon"
                  />
                  <h4>ENGAGEMENT</h4>
                </div>
                <p>
                  We are engagement specialists, who have led projects at all
                  levels of the IAP2 spectrum.
                </p>
                <a href="#contact" className="read-more-link">
                  READ MORE
                </a>
              </div>
              <div className="sub-card">
                <div className="sub-card-header">
                  <img
                    src={communicationIcon}
                    alt="Communication Icon"
                    className="sub-card-icon"
                  />
                  <h4>COMMUNICATIONS</h4>
                </div>
                <p>
                  We are award-winning leaders in communications and campaign
                  management.
                </p>
                <a href="#contact" className="read-more-link">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Alternating Rows) */}
      <section id="services" className="services-section">
        <h2 className="section-main-title">SERVICES</h2>

        {/* 1. Engagement */}
        <div className="service-row">
          <div className="service-content">
            <h3>ENGAGEMENT</h3>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creativity,
              results and exceptional levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>
          </div>
          <div className="service-img-container">
            <img
              src={serviceEngImg}
              alt="Engagement Service"
              className="service-illustration"
            />
          </div>
        </div>

        {/* 2. Communications (Reverse) */}
        <div className="service-row reverse">
          <div className="service-content">
            <h3>COMMUNICATIONS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </div>
          <div className="service-img-container">
            <img
              src={serviceComImg}
              alt="Communications Service"
              className="service-illustration"
            />
          </div>
        </div>

        {/* 3. Facilitation */}
        <div className="service-row">
          <div className="service-content">
            <h3>FACILITATION</h3>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creativity,
              results and exceptional levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>
          </div>
          <div className="service-img-container">
            <img
              src={serviceFacImg}
              alt="Facilitation Service"
              className="service-illustration"
            />
          </div>
        </div>

        {/* 4. Consultation and Research (Reverse) */}
        <div className="service-row reverse">
          <div className="service-content">
            <h3>CONSULTATION AND RESEARCH</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </div>
          <div className="service-img-container">
            <img
              src={serviceConImg}
              alt="Consultation Service"
              className="service-illustration"
            />
          </div>
        </div>

        {/* 5. Training & Mentoring */}
        <div className="service-row">
          <div className="service-content">
            <h3>TRANING & MENTORING</h3>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creativity,
              results and exceptional levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>
          </div>
          <div className="service-img-container">
            <img
              src={serviceTrnImg}
              alt="Training Service"
              className="service-illustration"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="team-section">
        <h2 className="section-main-title">OUR TEAM</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img src={person1} alt="Jessica D'suza" className="team-img" />
            </div>
            <h3>Jessica D'suza</h3>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper alt-blob-1">
              <img src={person2} alt="Johny Williams" className="team-img" />
            </div>
            <h3>Johny Williams</h3>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper alt-blob-2">
              <img src={person3} alt="Sanya R." className="team-img" />
            </div>
            <h3>Sanya R.</h3>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="projects-section">
        <h2 className="section-main-title">OUR PROJECTS</h2>
        <div className="projects-grid">
          <div className="project-left-card">
            <img
              src={projectBgImg}
              alt="Projects Building"
              className="project-bg-img"
            />
            <div className="project-overlay-text">
              <h3>
                PROJECTS
                <br />
                NAME
              </h3>
            </div>
          </div>
          <div className="project-right-column">
            <div className="project-small-card">
              <img
                src={projectImg2}
                alt="Project Review"
                className="project-small-img"
              />
            </div>
            <div className="project-small-card">
              <img
                src={projectImg3}
                alt="Team Cheering"
                className="project-small-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients" className="clients-section">
        <h2 className="section-main-title">OUR CLIENTS</h2>
        <div className="clients-grid">
          <img src={boroondaraLogo} alt="Boroondara" className="client-logo" />
          <img
            src={portPhillipLogo}
            alt="Port Phillip"
            className="client-logo"
          />
          <img src={brigitteLogo} alt="Brigitte" className="client-logo" />
          <img
            src={crossingLogo}
            alt="Level Crossing Removal"
            className="client-logo"
          />
          <img src={bhpLogo} alt="BHP" className="client-logo" />
          <img
            src={victoriaLogo}
            alt="Victoria State Government"
            className="client-logo"
          />
          <img src={pacificLogo} alt="Pacific Hydro" className="client-logo" />
          <img
            src={melbourneWaterLogo}
            alt="Melbourne Water"
            className="client-logo"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="mendleson-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="#facebook" className="social-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#linkedin" className="social-link">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#google" className="social-link">
                  Google +
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>
                <p>Lorem ipsum dummy address used for display</p>
              </li>
              <li>
                <p>1234567890</p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Email</h4>
            <ul>
              <li>
                <p>mendlesoncommunication@email.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Copyright 2018 Mendleson Communication Pty Ltd</p>
        </div>
      </footer>
    </div>
  );
}
