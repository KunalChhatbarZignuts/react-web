import aboutUs1 from "../assets/About Us 1.svg";
import EnagagementIcon1 from "../assets/Enagagement icon 1.svg";
import coomunicationIcon1 from "../assets/coomunication icon 1.svg";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image-wrapper">
          <img
            src={aboutUs1}
            alt="About Mendleson"
            className="about-us-image"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>

          <p className="about-description">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high quality approach. We deliver value, creativity, results and
            exceptional levels of customer service and professionalism. We
            specialise in infrastructure development, energy and natural
            resources.
          </p>

          {/* Services */}
          <div className="about-services">
            {/* Engagement */}
            <div className="about-service">
              <img src={EnagagementIcon1} alt="" className="service-icon" />

              <h3>ENGAGEMENT</h3>

              <p>
                We are engagement specialists, who have led projects at all
                levels of the IAP2 spectrum.
              </p>

              <a href="#read-more-engagement" className="read-more">
                READ MORE
              </a>
            </div>

            {/* Communications */}
            <div className="about-service">
              <img src={coomunicationIcon1} alt="" className="service-icon" />

              <h3>COMMUNICATIONS</h3>

              <p>
                We are award-winning leaders in communications and campaign
                management.
              </p>

              <a href="#read-more-communications" className="read-more">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
