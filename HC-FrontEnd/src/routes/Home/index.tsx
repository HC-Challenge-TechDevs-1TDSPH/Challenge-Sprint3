import { Link } from "react-router-dom";
import { FaPlayCircle, FaQuestionCircle, FaComments } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="main-container">
          <h1>Facilitando o acesso à saúde digital</h1>
          <p>Uma plataforma pensada para quem tem dificuldade com tecnologia.<br />Simples, acessível e feita para você.</p>
          <Link to="/acessibilidade" className="hero-button">Conheça a Solução</Link>
        </div>
      </section>
      <main className="page-container">
        <div className="main-container">
          <h2 className="section-title">O que você encontra aqui</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon-wrapper"><FaPlayCircle className="feature-card-icon" /></div>
              <h3>Vídeos Tutoriais</h3>
              <p>Aprenda a usar os serviços do Hospital com vídeos simples e rápidos.</p>
              <Link to="/videos" className="feature-card-link">Ver vídeos</Link>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon-wrapper"><FaQuestionCircle className="feature-card-icon" /></div>
              <h3>Dúvidas Frequentes</h3>
              <p>Encontre respostas para as perguntas mais comuns.</p>
              <Link to="/faq" className="feature-card-link">Acessar FAQ</Link>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon-wrapper"><FaComments className="feature-card-icon" /></div>
              <h3>Fale Conosco</h3>
              <p>Precisa de ajuda? Entre em contato com a nossa equipe.</p>
              <Link to="/contato" className="feature-card-link">Abrir contato</Link>
            </div>
          </div>
        </div>
      </main>
      <section className="about-section">
        <div className="about-container">
          <h2>Sobre o Projeto</h2>
          <p>Este projeto foi desenvolvido para o Challenge 2025 em parceria com o Hospital das Clínicas, com o objetivo de ajudar pessoas idosas ou com dificuldade digital a acessar serviços de saúde.</p>
        </div>
      </section>
    </>
  );
};
export default Home;