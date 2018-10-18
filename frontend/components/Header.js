import Nav from "./Nav";

const Header = () => (
  <header>
    <div className="bar">
      <a href="/">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </header>
);

export default Header;
