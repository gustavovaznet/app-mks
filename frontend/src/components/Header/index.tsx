//ASSETS
import logoImg from '../../assets/img/logo.svg';
//CSS
import './styles.css';

//HEADER COMPONENT
function Header() {
  return (
    <>
      <header>
        <div className="mksshop-logo-container">
          <img src={logoImg} alt="MKSShop" />
          <h1>MKS Shop</h1>
          <p>
            Created by<a href="https://github.com/gustavovaznet" target="_blank">Gustavo Vaz</a>
          </p>
        </div>
      </header>
    </>
  )
}

export default Header;
