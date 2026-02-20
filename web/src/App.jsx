import "./app.css";

export default function App() {
  const products = Array.from({ length: 10 }, (_, i) => i);

  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="logo-icon">CS</span>
          <span className="logo-text">COSMETSHOP</span>
        </div>
      </header>

      <main className="main">
        <section className="top-section">
          <h1 className="titulo">
            TOP 10<br />
            <strong>MAIS PROCURADOS !!</strong>
          </h1>
        </section>

        <section className="products">
          {products.map((id) => (
            <div className="product-card" key={id}>
              <div className="product-image" />

              <section className="content-card">
                <p className="product-name">Produto</p>
                <p className="product-price">R$ 27,90</p>
              </section>

            </div>
          ))}
        </section>

        <section className="section-solucao">
          <h2>Não encontrou o que procurava?</h2>
          <a>
            <button className="btn-contato">
              <section>
                <img src="/src/assets/logo-whatsapp.png"alt="logo-whatsapp"
                className="logo-whatsapp"/>
                <span>Fala com a gente</span>
              </section>
            </button>
          </a>
        </section>

        <section className="section-quem-somos">

          <h1>Quem somos?</h1>
          <p>
            Somos uma loja de cosméticos apaixonada por realçar a beleza natural de cada pessoa. Trabalhamos com produtos de alta qualidade, cuidadosamente selecionados para oferecer cuidado, bem-estar e resultados reais no dia a dia.
          </p>
          <p>
            Aqui você encontra uma variedade de itens para cuidados com a pele, cabelos, maquiagem e perfumaria, sempre acompanhando as tendências do mercado e priorizando marcas confiáveis. Nosso compromisso é proporcionar uma experiência de compra segura, prática e agradável, com atendimento atencioso e dedicado.
          </p>
          <p>
            Acreditamos que beleza vai além da estética: é autoestima, confiança e autocuidado. Por isso, estamos sempre prontos para ajudar você a encontrar o produto ideal para suas necessidades.
          </p>
          <p>
            💄✨ Cuide de você. Realce sua beleza. Sinta-se bem todos os dias.
          </p>
        </section>

        <section className="section-localizacao">
          <h1>Onde estamos localizados?</h1>

          <p>
            Nossa loja está localizada em um ponto de fácil acesso, pensada para oferecer conforto e praticidade a todos os nossos clientes. Contamos com um ambiente acolhedor e organizado, onde você pode conhecer nossos produtos de perto e receber um atendimento personalizado.
          </p>
          <p>
            Estamos sempre de portas abertas para receber você e ajudar na escolha dos melhores cosméticos para o seu dia a dia.
          </p>
          <p>
            📍 Endereço: [Rua / Avenida, número – Bairro]
            🏙️ Cidade / Estado
            🕒 Horário de funcionamento: [dias e horários]
          </p>
        </section>

        <section className="section-perguntas-frequentes">

          <h1>Perguntas frequentes</h1>

          <h3>Quais formas de pagamento vocês aceitam?</h3>
          <p>Aceitamos cartões de crédito, débito, Pix e dinheiro (para compras na loja física).</p>

          <h3>Vocês fazem entregas?</h3>
          <p>Sim. Realizamos entregas para a cidade e região. Consulte valores e prazos pelo WhatsApp.</p>

          <h3>Posso retirar o pedido na loja?</h3>
          <p>Sim! Nosso atendimento está preparado para orientar você na escolha ideal para seu tipo de pele ou cabelo.</p>

          <h3>Posso trocar um produto?</h3>
          <p>Sim. As trocas seguem o Código de Defesa do Consumidor. Para mais detalhes, fale com a gente.</p>

        </section>

        <footer>
          <h2>Fale conosco</h2>

          <section className="btns-contatos">

            <a href="">
              <button className="btn-instagram">

              <section>
                <img src="/src/assets/logo-instagram.png"alt="logo-Instagram"
                className="logo-whatsapp"/>
                <span>Nosso Instagram</span>
              </section>

            </button>
            </a>

            <a href="">
            <button className="btn-whatsapp">

              <section>
                <img src="/src/assets/logo-whatsapp.png"alt="logo-whatsapp"
                className="logo-whatsapp"/>
                <span>Nosso Whatsapp</span>
              </section>

            </button>
          </a>
          </section>
        </footer>

      </main>
    </>
  );
}
