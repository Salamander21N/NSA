import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './intro.css';

const Intro: React.FC = () => {
  const history = useHistory();

  const handleVideoEnd = () => {
    history.replace('/home'); // ⬅️ Aquí se cambia a /home cuando termine el video
  };

  useEffect(() => {
    // Opcional: por si quieres hacer algo al montar
  }, []);

  return (
    <div className="intro-container">
      <video
        className="intro-video"
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        <source src="/videos/apples.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>
    </div>
  );
};

export default Intro;
