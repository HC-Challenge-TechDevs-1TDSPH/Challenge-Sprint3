'use client';
import { FaPlay } from 'react-icons/fa';

interface VideoTutorial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

const Solucao = () => {
  const videos: VideoTutorial[] = [
    {
      id: 1,
      title: '[Teleatendimento] Orientação',
      description: 'Tutorial 1: [Teleatendimento] Orientação aos Pacientes',
      thumbnail: 'img/teleatendimento-tutorial-video-thumbnail.png',
      videoUrl: 'https://www.youtube.com/watch?v=rT9U8HlXaRw',
    },
    {
      id: 2,
      title: 'Acessar teleconsulta (Android)',
      description:'Tutorial 2: Como acessar uma teleconsulta? (Celular Android)',
      thumbnail: 'img/smartphone-android-tutorial-video-thumbnail.png',
      videoUrl: 'https://www.youtube.com/watch?v=Gl5FnbWRCCM',
    },
    {
      id: 3,
      title: 'Acessar teleconsulta (iOS)',
      description: 'Tutorial 3: Como acessar uma teleconsulta? (Celular iOS)',
      thumbnail: 'img/iphone-ios-tutorial-video-thumbnail.png',
      videoUrl: 'https://www.youtube.com/watch?v=0sqNK7oZfwY',
    },
  ];

  return (
    <main className="page-container">
      <div className="solucao-container">
        <header className="solucao-header">
          <h1>Vídeos Tutoriais</h1>
          <p>
            Aqui você encontra vídeos que explicam como usar a plataforma e os
            serviços digitais do Hospital das Clínicas.
          </p>
        </header>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail-wrapper">
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                  />
                  <div className="video-play-overlay">
                    <div className="video-play-button">
                      <FaPlay />
                    </div>
                  </div>
                </a>
              </div>

              <div className="video-info">
                <h3>{video.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Solucao;
