function Perguntas() {
  const perguntas = [
    {
      pergunta: "Preciso estar matriculado para participar?",
      resposta: "Para acesso completo às atividades, sim. Você pode acompanhar comunicados, mas a participação integral exige matrícula ativa.",
    },
    {
      pergunta: "Como funcionam as eleições da diretoria?",
      resposta: "As eleições acontecem a cada 12 meses. Apenas alunos matriculados podem participar do processo e ocupar cargos.",
    },
    {
      pergunta: "Vou aprender do zero?",
      resposta: "Sim. As trilhas começam pelo básico e evoluem por projetos, sem pular os fundamentos importantes.",
    },
    {
      pergunta: "O que eu ganho no final?",
      resposta: "Você constrói um portfólio com projetos publicados, repositórios organizados e experiência com práticas próximas do mercado.",
    },
  ];

  return (
    <section className="perguntas-secao" id="perguntas">
      <div className="container">
        <div className="perguntas-cabecalho">
          <div>
            <span className="titulo-secao">Dúvidas?</span>
            <h2>Perguntas frequentes</h2>
          </div>
          <p>Encontre respostas rápidas para as principais dúvidas sobre o ClubeDS.</p>
        </div>

        <div className="faq">
          {perguntas.map((item, indice) => (
            <details className="faq__item" key={item.pergunta} open={indice === 0}>
              <summary>
                <span>{item.pergunta}</span>
                <b>+</b>
              </summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>

        <div className="cta">
          <div className="cta__icon">DS</div>
          <div className="cta__content">
            <span>ClubeDS</span>
            <h3>Ainda ficou com alguma dúvida?</h3>
            <p>Entre para o clube e acompanhe as próximas oficinas, projetos e palestras.</p>
          </div>
          <a className="botao" href="cadastro.html">Quero participar</a>
        </div>
      </div>
    </section>
  );
}

export default Perguntas;
