import engagementImage from "../assets/Engagement vector 1.svg";
import "./Services.css";
import asset5 from "../assets/Asset 5 1.svg";
import coomunicationIcon1 from "../assets/Consultation vector 1.svg";
import facilationVector1 from "../assets/facilation vector 1.svg";
import consultationVacor1 from "../assets/Consultation vector 1.svg";
import trainingVactor1 from "../assets/Training and vector 1.svg";
import asset61 from "../assets/Asset 6 1.svg";
import Asset71 from "../assets/Asset 7 1.svg";
import Asset81 from "../assets/Asset 8 2.svg";
function Services() {
  return (
    <section id="services" className="services-section">
      {/* Background decoration */}
      <img src={asset5} alt="" className="services-background" />
      <img src={asset61} className="services-background-right" />
      <img src={Asset71} className="services-background-1" />
      <img src={Asset81} className="services-background-2" />

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

        <div className="group-10">
          <div className="communications">
            <span className="communications_span">Communications</span>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-faucibus-quam-quis-egestas-orci-scelerisque-eu-vitae-sapien-pellentesque-et-sit-ac-fames-facilisis-nibh-faucibus">
            <span className="loremipsumdolorsitametconsecteturadipiscingelitfaucibusquamquisegestasorciscelerisqueeuvitaesapienpellentesqueetsitacfamesfacilisisnibhfaucibus_span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.{" "}
            </span>
          </div>
          <img className="coominucation-vector-1" src={coomunicationIcon1} />
        </div>

        <div className="group-9">
          <div className="facilitation">
            <span className="facilitation_span">facilitation</span>
          </div>
          <div className="we-love-what-we-do-and-are-driven-by-achieving-great-results-for-our-clients-our-awards-and-impressive-client-list-are-testament-to-our-high-quality-approach-we-deliver-value-creakvity-results-and-excepkonal-levels-of-customer-service-and-professionalism-we-specialise-in-infrastructure-development-energy-and-natural-resources">
            <span className="welovewhatwedoandaredrivenbyachievinggreatresultsforourclientsourawardsandimpressiveclientlistaretestamenttoourhighqualityapproachwedelivervaluecreakvityresultsandexcepkonallevelsofcustomerserviceandprofessionalismwespecialiseininfrastructuredevelopmentenergyandnaturalresources_span">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and <br />
              natural resources.
            </span>
          </div>
          <img className="facilation-vector-1" src={facilationVector1} />
        </div>

        <div className="group-7">
          <div className="consultation-and-research">
            <span className="consultationandresearch_span">
              Consultation and
              <br />
              Research
            </span>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-faucibus-quam-quis-egestas-orci-scelerisque-eu-vitae-sapien-pellentesque-et-sit-ac-fames-facilisis-nibh-faucibus">
            <span className="loremipsumdolorsitametconsecteturadipiscingelitfaucibusquamquisegestasorciscelerisqueeuvitaesapienpellentesqueetsitacfamesfacilisisnibhfaucibus_span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.{" "}
            </span>
          </div>
          <img className="consultation-vector-1" src={consultationVacor1} />
        </div>
        <div className="group-8">
          <div className="traning-mentoring">
            <span className="traningmentoring_span">
              Traning &amp; Mentoring
            </span>
          </div>
          <div className="we-love-what-we-do-and-are-driven-by-achieving-great-results-for-our-clients-our-awards-and-impressive-client-list-are-testament-to-our-high-quality-approach-we-deliver-value-creakvity-results-and-excepkonal-levels-of-customer-service-and-professionalism-we-specialise-in-infrastructure-development-energy-and-natural-resources">
            <span className="welovewhatwedoandaredrivenbyachievinggreatresultsforourclientsourawardsandimpressiveclientlistaretestamenttoourhighqualityapproachwedelivervaluecreakvityresultsandexcepkonallevelsofcustomerserviceandprofessionalismwespecialiseininfrastructuredevelopmentenergyandnaturalresources_span">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </span>
          </div>
          <img className="training-and-vector-1" src={trainingVactor1} />
        </div>
      </div>
    </section>
  );
}

export default Services;
