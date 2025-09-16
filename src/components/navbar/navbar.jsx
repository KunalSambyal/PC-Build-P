import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="/public/images/pc.svg" alt="logo" />
        <h2>TechForge</h2>
      </div>
      <ul className="hide">
        <li herf="#">Home</li>
        <li herf="#">Products</li>
        <li herf="#">PC Builder</li>
        <li herf="#">Contact</li>
      </ul>
      <div className="search">
        <div className="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        
        <input placeholder="Search here..."/>
      </div>
      <div className="nav-icons">
        <i className="fa-solid fa-magnifying-glass hide"></i>
        <i className="fa-solid fa-cart-shopping hide"></i>
        <i className="fa-solid fa-user hide"></i>
        <i className="fa-solid fa-moon hide"></i>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
