import { useState } from "react";
import logoClubeDS from "../assets/logo-clubeds.svg";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <div className="container header-conteudo">
          <img src={logoClubeDS} alt="ClubeDS" className="marca-logo" />
            <strong>Clube DS</strong>
            <small>Clube de Programação</small>
          </span>
        </a>

        <button
          className="menu-botao"
          type="button"
          onClick={alternarMenu}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>

        <nav className={menuAberto ? "nav aberta" : "nav"} aria-label="Navegação principal">
          <a href="#inicio" onClick={fecharMenu}>Início</a>
          <a href="#funcionalidades" onClick={fecharMenu}>Funcionalidades</a>
          <a href="#perguntas" onClick={fecharMenu}>Perguntas</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
