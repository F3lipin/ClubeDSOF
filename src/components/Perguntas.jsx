function Perguntas() {
  return (
    <div class="container">
      <div id = "summary">
        <header class="section__header">
          <h2>Perguntas frequentes</h2>
          <p>Respostas rápidas para dúvidas comuns.</p>
        </header>

        <div class="faq">
          <details class="faq__item">
            <summary>Preciso estar matriculado para participar?</summary>
            <p class="muted">Para acesso completo às atividades, sim. Você pode acompanhar comunicados, mas a participação integral exige matrícula ativa.</p>
          </details>

          <details class="faq__item">
            <summary>Como funcionam as eleições da diretoria?</summary>
            <p class="muted">A cada 12 meses. Apenas alunos matriculados podem participar do processo e ocupar cargos.</p>
          </details>

          <details class="faq__item">
            <summary>Vou aprender do zero?</summary>
            <p class="muted">Sim. As trilhas começam do básico e evoluem por projetos, sem pular fundamentos.</p>
          </details>

          <details class="faq__item">
            <summary>O que eu ganho no final?</summary>
            <p class="muted">Um portfólio com projetos publicados (deploy), repositórios organizados e vivência de práticas do mercado.</p>
          </details>
        </div>

        <div class="cta">
          <div class="cta__content">
            <h3>Pronto para entrar?</h3>
            <p>Faça seu cadastro e receba as próximas datas de oficinas e palestras.</p>
          </div>
          <a class="btn btn--primary" href="cadastro.html">Cadastrar agora</a>
        </div>
      </div>
      </div>
  );
}
export default Perguntas;