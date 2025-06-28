import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen className="home-bg" onClick={() => history.push('/menu')}>
        <div className="center-content">
          Toca para Continuar
        </div>
        <img src="/images/logo3.png" alt="Nutry Logo" className="logo3-img" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
