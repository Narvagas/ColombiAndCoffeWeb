import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Header.css'; // Importar el archivo de estilos
import { FaSearch } from 'react-icons/fa'; // Importar el icono de lupa

function Header() {
  return (
    <header className="header-container"> {/* Agregar la clase CSS para el contenedor del encabezado */}
      <div className="header-title">Colombian&Coffee</div> 
      <nav>
        <div className="search-icon">
          <FaSearch />
        </div>
        <ul className="nav-list"> {/* Agregar la clase CSS para la lista de navegación */}
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/cafe-tradicional">CAFÉ TRADICIONAL</Link></li>
          <li><Link to="/cafe-especial">CAFÉ ESPECIAL</Link></li>
          <li><Link to="/souvenirs">SOUVENIRS</Link></li>
          <li><Link to="/regalos-ofertas">REGALOS Y OFERTAS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/suscripciones">SUSCRIPCIONES</Link></li>
        </ul>
      </nav>
      {/* Agrega la sección de búsqueda aquí */}
    </header>
  );
}

export default Header;
