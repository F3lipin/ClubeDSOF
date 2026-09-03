import logoClubeDS from "../assets/logo-clubeds.svg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="etiqueta">Clube de Programação</span>
          <h1>Um clube para construir projetos de verdade — com método, colaboração e evolução.</h1>
          <p>Aprenda programação na prática, desenvolva projetos reais e evolua junto com uma comunidade de pessoas que também gostam de tecnologia.</p>
          <div className="grupo-botoes">
            <a className="botao" href="#perguntas">Conheça o ClubeDS</a>
            <a className="botao botao-secundario" href="#funcionalidades">Como funciona</a>
          </div>
          <small>Projetos, oficinas, colaboração e aprendizado na prática.</small>
        </div>

        <div className="hero-logo-card" aria-label="Logo do ClubeDS">
          <div className="hero-logo-glow" />
          <img src={logoClubeDS} alt="Logo ClubeDS" />
          <span>CLUBE DE PROGRAMAÇÃO</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
