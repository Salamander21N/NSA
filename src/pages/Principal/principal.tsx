import React, { useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { IoSettingsSharp } from 'react-icons/io5';
import './principal.css';

const usuario = "Usuario Demo";

const Principal: React.FC = () => {
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAbrirCamara = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = "image/*";
      fileInputRef.current.capture = "environment";
      fileInputRef.current.click();
    }
  };

  const handleAbrirGaleria = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = "image/*";
      fileInputRef.current.removeAttribute("capture");
      fileInputRef.current.click();
    }
  };

  const handleSettingsClick = () => {
    history.push('/configuracion');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Página Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className="ion-padding"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Botón circular de engranaje */}
        <button className="settings-button" onClick={handleSettingsClick}>
          <IoSettingsSharp className="settings-icon" />
        </button>

        {/* Logo de usuario */}
        <div style={{ marginTop: 40, marginBottom: 28, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <circle cx="75" cy="75" r="75" fill="#3D6FA2" />
            <circle cx="75" cy="65" r="35" fill="#fff" />
            <ellipse cx="75" cy="120" rx="45" ry="28" fill="#fff" />
          </svg>
        </div>

        {/* Nombre del usuario */}
        <div style={{ fontSize: 22, fontWeight: 600, color: "#1A3C5E", marginBottom: 40, textAlign: 'center', width: '100%' }}>
          {usuario}
        </div>

        {/* Botones Escaner y Galería */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <IonButton expand="block" style={{ marginBottom: 22, width: 220 }} onClick={handleAbrirCamara}>
            Escaner
          </IonButton>
          <IonButton expand="block" style={{ width: 220 }} onClick={handleAbrirGaleria}>
            Galería
          </IonButton>
        </div>

        {/* Input oculto para seleccionar o capturar imagen */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={() => {
            // Aquí puedes manejar la imagen seleccionada
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Principal;
