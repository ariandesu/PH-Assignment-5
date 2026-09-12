export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-box">DS</span>
          <span className="logo-text">Dev Stack</span>
        </a>

        <nav className="nav-links">
          <a href="#" className="active">
            Home
          </a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

