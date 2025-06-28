import { IonContent, IonPage } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Reemplaza historial anterior para que no pueda regresar
    history.replace('/menu');

    // Captura el intento de retroceso (botón atrás)
    const handlePopState = () => {
      history.replace('/menu');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [history]);

  const handleClick = (ruta: string) => {
    history.push(ruta);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="menu-bg">
        <img src="/images/logo2.png" alt="Logo" className="logo2-img" />
        <button
          className="menu-btn"
          style={{ top: '340px', left: '60px', width: '260px', height: '55px' }}
          onClick={() => handleClick('/login')}
        >
          Iniciar Sesión
        </button>
        <button
          className="menu-btn"
          style={{ top: '415px', left: '60px', width: '260px', height: '55px' }}
          onClick={() => handleClick('/register')}
        >
          Registrarse
        </button>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
