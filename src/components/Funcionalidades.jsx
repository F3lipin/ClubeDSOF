function Funcionalidades() {
  
  const funcionalidades = [
    "Você evolui por desafios progressivos: fundamentos, web, backend, dados e projetos integradores.",
    "Você aprende fazendo, com revisão de código, pair programming e boas práticas.",
    "Cada ciclo gera entregas reais: páginas web, APIs, dashboards, automações e apresentação final.",
  
  ];
   

  return (
    <section className="secao" id="funcionalidades">
      <div className="container">
        <div id = "h2">
        <p className="titulo-secao">Como funciona o ClubeDS</p>
        <h2>Uma experiência planejada com cuidado</h2>
        <div className="grade-beneficios">
          {funcionalidades.map((funcionalidade, indice) => (
            <article className="beneficio" key={funcionalidade}>
              <span>{String(indice + 1).padStart(2, "0")}</span>
              <p>{funcionalidade}</p>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Funcionalidades;