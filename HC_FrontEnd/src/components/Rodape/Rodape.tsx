import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">© 2025 Hospital das Clínicas - Todos os direitos reservados</p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/hospitaldasclinicasdafmusp" className="footer-social-link" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/hospitalhcfmusp/" className="footer-social-link" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/channel/UC_DUjcI35Hm0ix74KDQ67Jw/featured" className="footer-social-link" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://www.linkedin.com/company/hcfmusp/" className="footer-social-link" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://x.com/hospitalHCFMUSP" className="footer-social-link" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};
export default Rodape;