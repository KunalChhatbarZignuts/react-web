import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <footer className="footer">
          <div className="footer-container">
            {/* Social */}
            <div className="footer-column">
              <h3>Social</h3>

              <div className="footer-social">
                <a href="#" aria-label="Facebook">
                  <span>Facebook</span>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <span>LinkedIn</span>
                </a>

                <a href="#" aria-label="Google Plus">
                  <span>Google +</span>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div className="footer-column">
              <h3>Explore</h3>

              <div className="footer-links">
                <a href="#services">Services</a>
                <a href="#team">Team</a>
                <a href="#clients">Clients</a>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h3>Contact</h3>

              <div className="footer-info">
                <p>
                  Lorem Ipsum dummy address
                  <br />
                  used for display
                  <br />
                  1234567890
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="footer-column">
              <h3>Email</h3>

              <a
                href="mailto:mendlesoncommunication@email.com"
                className="footer-email"
              >
                mendlesoncommunication@email.com
              </a>
            </div>
          </div>
        </footer>
      </div>

      <footer id="contact" className="mendleson-footer">
        <p>© Copyright 2018 Mendleson Communication Pty Ltd</p>
      </footer>
    </>
  );
}

export default Footer;
