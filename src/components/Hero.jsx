function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="etiqueta">Clube de Programação</span>
          <h1>Um clube para construir projetos de verdade - com método, colaboração e evolução.</h1>
          <p>Um espaço de escuta, acolhimento e reflexão para momentos importantes da sua trajetória.</p>
          <div className="grupo-botoes">
            <a className="botao" href="#contato">Quero me cadastrar</a>
            <a className="botao botao-secundario" href="#sobre">Como Funciona</a>
          </div>
          <small>Atendimento sujeito à disponibilidade.</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;