import React, { useRef } from 'react';
<<<<<<< HEAD
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { IoSettingsSharp } from 'react-icons/io5';
import './principal.css';
=======
import {
  IonPage, IonContent, IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './principal.css'; // Importa los estilos
>>>>>>> ad9e1b9a82cd8fe5638b210e4c267a4e42192992

const usuario = "Usuario Demo";

const Principal: React.FC = () => {
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

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

<<<<<<< HEAD
  const handleSettingsClick = () => {
=======
  const handleConfiguracion = () => {
>>>>>>> ad9e1b9a82cd8fe5638b210e4c267a4e42192992
    history.push('/configuracion');
  };

  return (
    <IonPage>
      {/* Botón de engranaje arriba a la izquierda */}
      <button
        onClick={handleConfiguracion}
        className="boton-configuracion"
        aria-label="Configuración"
      >
<<<<<<< HEAD
        {/* Botón circular de engranaje */}
        <button className="settings-button" onClick={handleSettingsClick}>
          <IoSettingsSharp className="settings-icon" />
        </button>

        {/* Logo de usuario */}
        <div style={{ marginTop: 40, marginBottom: 28, display: 'flex', justifyContent: 'center', width: '100%' }}>
=======
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#3D6FA2" />
          <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7-3a1 1 0 0 0 .93-1.36l-1-2.32a1 1 0 0 0-.51-.51l-2.32-1A1 1 0 0 0 15 5.07V3.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.57a1 1 0 0 0-.36.19l-2.32 1a1 1 0 0 0-.51.51l-1 2.32A1 1 0 0 0 3.5 12a1 1 0 0 0 1.36.93l2.32-1a1 1 0 0 0 .51-.51l1-2.32A1 1 0 0 0 9 8.93V7.5a1 1 0 0 0 1-1h2a1 1 0 0 0 1 1v1.43a1 1 0 0 0 .36.19l2.32 1a1 1 0 0 0 .51.51l1 2.32A1 1 0 0 0 20.5 12z" fill="#fff" />
        </svg>
      </button>

      <IonContent className="principal-bg">
        {/* Logo de usuario */}
        <div className="logo-container">
>>>>>>> ad9e1b9a82cd8fe5638b210e4c267a4e42192992
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <circle cx="75" cy="75" r="75" fill="#3D6FA2" />
            <circle cx="75" cy="65" r="35" fill="#fff" />
            <ellipse cx="75" cy="120" rx="45" ry="28" fill="#fff" />
          </svg>
        </div>

        {/* Nombre del usuario */}
        <div className="usuario-nombre">
          {usuario}
        </div>

<<<<<<< HEAD
        {/* Botones Escaner y Galería */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <IonButton expand="block" style={{ marginBottom: 22, width: 220 }} onClick={handleAbrirCamara}>
            Escaner
          </IonButton>
          <IonButton expand="block" style={{ width: 220 }} onClick={handleAbrirGaleria}>
=======
        {/* Botones */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <IonButton expand="block" className="principal-btn" onClick={handleAbrirCamara}>
            Escaner
          </IonButton>
          <IonButton expand="block" className="principal-btn" onClick={handleAbrirGaleria}>
>>>>>>> ad9e1b9a82cd8fe5638b210e4c267a4e42192992
            Galería
          </IonButton>
        </div>

<<<<<<< HEAD
        {/* Input oculto para seleccionar o capturar imagen */}
=======
        {/* Input oculto */}
>>>>>>> ad9e1b9a82cd8fe5638b210e4c267a4e42192992
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
<<<<<<< HEAD
          onChange={() => {
            // Aquí puedes manejar la imagen seleccionada
          }}
=======
          onChange={() => { /* Manejo de la imagen */ }}
>>>>>>> ad9e1b9a82cd8fe5638b210e4c267a4e42192992
        />
      </IonContent>
    </IonPage>
  );
};

export default Principal;
