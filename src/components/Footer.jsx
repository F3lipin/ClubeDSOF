function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <strong>Clube DS</strong>
        <small>Clube de Programação</small>
      </div>
    </footer>
  );
}

export default Footer;