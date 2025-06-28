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
import './login.css'; // al inicio del archivo

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
  <IonContent fullscreen className="login-bg">
    <div style={{ maxWidth: 350, margin: '0 auto', width: '100%' }}>
      <h2 className="login-title">Bienvenido</h2>

      <IonItem lines="full">
        <IonInput
          className="login-input"
          value={usuario}
          onIonChange={e => setUsuario(e.detail.value!)}
          placeholder="Ingresa tu usuario"
          clearInput
        />
      </IonItem>

      <IonItem lines="full" style={{ marginTop: 18 }}>
        <IonInput
          className="login-input"
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
