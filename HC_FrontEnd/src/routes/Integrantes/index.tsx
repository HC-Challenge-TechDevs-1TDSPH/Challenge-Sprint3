import { FaGithub, FaLinkedin } from 'react-icons/fa';

// A interface para os dados do integrante
interface TeamMember {
  name: string;
  rm: string;
  turma: string;
  image: string;
  github?: string;
  linkedin?: string;
}


const TeamMemberCard = ({ name, rm, turma, image, github, linkedin }: TeamMember) => {
  return (
    <div className="integrante-card">
      <div className="integrante-image-wrapper">
        <img src={image} alt={name} className="integrante-image" />
      </div>
      <div className="integrante-info">
        <h2>{name}</h2>
        <p>{rm} | {turma}</p>
      </div>
      <div className="integrante-socials">
        {github && <a href={github} aria-label={`GitHub de ${name}`}><FaGithub /></a>}
        {linkedin && <a href={linkedin} aria-label={`LinkedIn de ${name}`}><FaLinkedin /></a>}
      </div>
    </div>
  );
};


const Integrantes = () => {
  return (
    <main className="page-container">
      <div className="integrantes-grid">

        <TeamMemberCard
          name="Felipe Monte de Sousa"
          rm="RM: 562019"
          turma="Turma: 1TDSPH"
          image="/img/foto-felipe.jpeg" // CORRIGIDO
          github="https://github.com/Felipe-M-de-Sousa"
          linkedin="https://www.linkedin.com/in/felipe-sousa-761633356/"
        />

        <TeamMemberCard
          name="Aline Lourenço Carvalho"
          rm="RM: 564538"
          turma="Turma: 1TDSPK"
          image="/img/foto-aline.jpeg" 
          github="https://github.com/LibaLourenco"
          linkedin="https://www.linkedin.com/in/aline-louren%C3%A7o-carvalho/"
        />

        <TeamMemberCard
          name="Luna de Carvalho Guimarães"
          rm="RM: 562290"
          turma="Turma: 1TDSPH"
          image="/img/foto-luna.jpeg" 
          github="https://github.com/lunaguima"
          linkedin="https://www.linkedin.com/in/luna-guimar%C3%A3es-b0ba82309/"
        />

      </div>
    </main>
  );
};

export default Integrantes;
