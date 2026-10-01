import './Header.css';

function Header({ storeName = 'GadgetGrove', cartCount }) {
  return (
    <header className="app-header">
      <div className="header-inner">

        {/*Store Logo / Title*/}
        <h1 className="logo">🛒 {storeName}</h1>

        {/*Nav Menu*/}
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/*Cart Button with Cart Count*/}
        <button className="cart-btn" type="button">
          🛒 Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}

export default Header;
