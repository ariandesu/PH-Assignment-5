export default function AboutContact() {
  return (
    <section className="about-contact-section">
      <div id="about" className="about-block">
        <p className="section-label">
          ABOUT
        </p>

        <h2>
          A simple workspace for better
          technology choices.
        </h2>

        <p>
          Dev Stack brings frontend, backend,
          database, language, styling, and DevOps
          options into one clean comparison
          experience.
        </p>
      </div>

      <div
        id="contact"
        className="contact-block"
      >
        <p className="section-label">
          CONTACT
        </p>

        <h2>
          Have an idea for your next build?
        </h2>

        <p>
          Use the stack builder to organize your
          choices, then take your final technology
          list into your project planning workflow.
        </p>

        <a
          href="#technologies"
          className="secondary-btn"
        >
          Contact Dev Stack
        </a>
      </div>
    </section>
  );
}