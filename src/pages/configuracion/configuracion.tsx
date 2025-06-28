import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Configuracion: React.FC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const history = useHistory();

  const handleGuardar = () => {
    // Aquí puedes manejar el guardado de los datos
    alert(`Altura: ${altura}\nPeso: ${peso}\nObjetivo: ${objetivo}`);
  };

  const handleSalir = () => {
    history.push('/principal');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 32 }}>
          <IonLabel position="floating" style={{ marginBottom: 18 }}>Altura (cm)</IonLabel>
          <IonInput
            type="number"
            value={altura}
            onIonChange={e => setAltura(e.detail.value!)}
            placeholder="Ingresa tu altura"
          />
        </IonItem>

        <IonItem style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 32 }}>
          <IonLabel position="floating" style={{ marginBottom: 18 }}>Peso (kg)</IonLabel>
          <IonInput
            type="number"
            value={peso}
            onIonChange={e => setPeso(e.detail.value!)}
            placeholder="Ingresa tu peso"
          />
        </IonItem>

        <IonItem style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 32 }}>
          <IonLabel position="floating" style={{ marginBottom: 18 }}>Objetivo</IonLabel>
          <IonInput
            value={objetivo}
            onIonChange={e => setObjetivo(e.detail.value!)}
            placeholder="¿Cuál es tu objetivo?"
          />
        </IonItem>

        <IonButton expand="block" style={{ marginTop: 32 }} onClick={handleGuardar}>
          Guardar
        </IonButton>

        <IonButton expand="block" color="medium" style={{ marginTop: 12 }} onClick={handleSalir}>
          Salir a Principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Configuracion;
