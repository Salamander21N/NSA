import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonInput, IonItem, IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 👉 Interfaz que describe la estructura del JSON de respuesta
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
        // 👇 Aseguramos que el ID se almacene como string
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
              placeholder="Ingresa tu correo"
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
