import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './configuracion.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const Configuracion: React.FC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const history = useHistory();

  const handleGuardar = () => {
    alert(`Altura: ${altura}\nPeso: ${peso}\nObjetivo: ${objetivo}`);
  };

  const handleSalir = () => {
    history.push('/principal');
  };

  return (
    <IonPage>
      <IonContent
        className="config-page"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'flex-start',
          paddingBottom: 0
        }}
      >
        <IonItem
          lines="none"
          className="config-input"
          style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 32 }}
        >
          <IonLabel className="config-label" position="floating">
            Altura (cm)
          </IonLabel>
          <IonInput
            type="number"
            value={altura}
            onIonChange={e => setAltura(e.detail.value!)}
            placeholder="Ingresa tu altura"
          />
        </IonItem>

        <IonItem
          lines="none"
          className="config-input"
          style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 32 }}
        >
          <IonLabel className="config-label" position="floating">
            Peso (kg)
          </IonLabel>
          <IonInput
            type="number"
            value={peso}
            onIonChange={e => setPeso(e.detail.value!)}
            placeholder="Ingresa tu peso"
          />
        </IonItem>

        <IonItem
          lines="none"
          className="config-input"
          style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 32 }}
        >
          <IonLabel className="config-label" position="floating">
            Objetivo
          </IonLabel>
          <IonInput
            value={objetivo}
            onIonChange={e => setObjetivo(e.detail.value!)}
            placeholder="¿Cuál es tu objetivo?"
          />
        </IonItem>

        <div style={{ flex: 1 }} /> {/* Espaciador flexible */}

        <div style={{
          width: '100%',
          position: 'fixed',
          left: 0,
          bottom: 0,
          background: 'transparent',
          padding: '0 16px 36px 16px', // Más alejado del borde inferior
          boxSizing: 'border-box',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: 18 // Más espacio entre los botones
        }}>
          <IonButton expand="block" className="config-button" onClick={handleGuardar}>
            Guardar
          </IonButton>
          <IonButton expand="block" className="config-button-secondary" onClick={handleSalir}>
            Salir a Principal
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Configuracion;
