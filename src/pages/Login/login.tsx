import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Aquí podrías validar usuario/contrasena si lo deseas
    history.push('/principal');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <div style={{ maxWidth: 350, margin: '0 auto', width: '100%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 32, color: '#3D6FA2' }}>Bienvenido</h2>
          <IonItem>
            <IonInput
              value={usuario}
              onIonChange={e => setUsuario(e.detail.value!)}
              placeholder="Ingresa tu usuario"
              clearInput
            />
          </IonItem>
          <IonItem style={{ marginTop: 18 }}>
            <IonInput
              type="password"
              value={contrasena}
              onIonChange={e => setContrasena(e.detail.value!)}
              placeholder="Ingresa tu contraseña"
              clearInput
            />
          </IonItem>
          <IonButton expand="block" style={{ marginTop: 32, background: '#3D6FA2' }} onClick={handleLogin}>
            Iniciar Sesión
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
