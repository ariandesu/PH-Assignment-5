export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="logo-box">DS</span>
            <span className="logo-text">Dev Stack</span>
          </a>

          <p>
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>PRODUCT</h3>

          <a href="#">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-column">
          <h3>LEGAL</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}