import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>M</span>i
          <span>N</span>uses
          </h2>
      </div>
      <div className="menu-link">
        <ul>
          <li>
            <a href="#">Home</a>
             </li>
             <li>
            <a href="#">About</a>
             </li>
             <li>
            <a href="#">Services</a>
             </li>
             <li>
            <a href="#">Contact Us</a>
             </li>
        </ul>
        </div>
    </nav>
    {/* hero section */}
    <section className="hero-section">
      <p>Welcome to</p>
      <h2>Minuses</h2>
      <h3>Find if lost | Explore | Upload if Found </h3>

    </section>
    </>
  )
}

export default Navbar;
