import React, { useState } from 'react';
import {
  IonPage, IonContent, IonButton, IonInput, IonItem, IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';

interface LoginResponse {
  success: boolean;
  user_id: number;
}

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post<LoginResponse>('https://nutry-scan-backend.onrender.com/login/login', {
        email: usuario,
        contrasena: contrasena
      });

      if (response.data && response.data.success) {
        localStorage.setItem('user_id', response.data.user_id.toString());
        history.push('/principal');
      }
    } catch (error) {
      setToastMessage("Credenciales inválidas");
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="login-bg">
        <div className="login-container">
          <h2 className="login-title">Bienvenido</h2>
          <IonItem className="login-item">
            <IonInput
              className="login-input"
              value={usuario}
              onIonChange={e => setUsuario(e.detail.value!)}
              placeholder="Ingresa tu correo"
              clearInput
            />
          </IonItem>
          <IonItem className="login-item">
            <IonInput
              className="login-input"
              type="password"
              value={contrasena}
              onIonChange={e => setContrasena(e.detail.value!)}
              placeholder="Ingresa tu contraseña"
              clearInput
            />
          </IonItem>
          <IonButton expand="block" className="login-btn" onClick={handleLogin}>
            Iniciar Sesión
          </IonButton>
        </div>

        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setShowToast(false)}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
