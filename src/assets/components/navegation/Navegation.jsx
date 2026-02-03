import React,{useState} from 'react';
import './navegation.css';
const logo = '/logo.svg';
function Navegation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.getElementsByClassName('menu-toggle');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
      <header className="header-navegation">
        <div className='box-navegation container'>

          <img className="logo-navegation" src={logo} alt="Logo" />

          <label className={`menu-toggle${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}>
            <span className="hamburguer"></span>
            <span className="hamburguer"></span>
            <span className="hamburguer"></span>
          </label>

          <nav className={`navegation${isOpen ? ' open' : ''}`}>
            <ul className="navegation-list">
              <li>
                <a href="#home" onClick={e => handleNavItemClick(e, '#home')}>Início</a>
              </li>
              <li>
                <a href="#about" onClick={e => handleNavItemClick(e, '#about')}>Sobre</a>
              </li>
              <li>
                <a href="#services" onClick={e => handleNavItemClick(e, '#services')}>Serviços</a>
              </li>
              <li>
                <a href="#portifolio" onClick={e => handleNavItemClick(e, '#portifolio')}>Portifólio</a>
              </li>
              <li>
                <a href="#experience" onClick={e => handleNavItemClick(e, '#experience')}>Experiência</a>
              </li>
              <li>
                <a href="#Contact" onClick={e => handleNavItemClick(e, '#Contact')}>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
export default Navegation;