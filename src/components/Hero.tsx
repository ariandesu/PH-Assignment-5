export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Build Your Ideal
            <br />
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-btn">
              Explore Technologies
            </a>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="./src/assets/banner-stack.png"
            alt="Development stack illustration"
          />
        </div>
      </div>
    </section>
  );
}

