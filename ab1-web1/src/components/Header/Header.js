import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Sistema de Conversão SIAP</h1>
      <nav className="navbar">
        <a href="/Suporte">Suporte</a>
        <a href="/Instrucoes">Instruções</a>
        <a href="/Login" className="login-button">Login</a>
      </nav>
    </header>
  );
}

export default Header;
