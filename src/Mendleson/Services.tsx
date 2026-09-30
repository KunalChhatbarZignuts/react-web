import engagementImage from "../assets/Engagement vector 1.svg";
import "./Services.css";
import asset5 from "../assets/Asset 5 1.svg";
function Services() {
  return (
    <section id="services" className="services-section">
      {/* Background decoration */}
      <img src={asset5} alt="" className="services-background" />
      <div className="services-container">
        {/* Section Title */}
        <div className="services-title">
          <span>SERVICES</span>
        </div>
        {/* Engagement */}
        <div className="service-item">
          <div className="service-content">
            <h2>ENGAGEMENT</h2>

            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creativity,
              results and exceptional levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>
          </div>

          <div className="service-image">
            <img src={engagementImage} alt="Engagement" />
          </div>
        </div>

        {/* Bottom Line */}
      </div>
    </section>
  );
}

export default Services;
