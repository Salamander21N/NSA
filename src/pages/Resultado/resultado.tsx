import React, { useRef, useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import './resultado.css';

interface ResultadoProps {
  texto: string;
}

const Resultado: React.FC<ResultadoProps> = ({ texto }) => {
  const [panelHeight, setPanelHeight] = useState<number | undefined>(undefined);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setPanelHeight(textRef.current.scrollHeight + 48); // Padding incluido
    }
  }, [texto]);

  return (
    <IonPage>
      <IonContent
        fullscreen
        scrollY={true}
        className="login-bg"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
      >
        <div
          style={{
            margin: '32px auto',
            width: '90%',
            minHeight: 120,
            maxWidth: 600,
            background: '#f7f7f7',
            borderRadius: 14,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: 24,
            overflowY: 'auto',
            transition: 'height 0.2s',
            height: panelHeight ? panelHeight : 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            ref={textRef}
            style={{
              whiteSpace: 'pre-wrap',
              fontSize: 16,
              color: '#222',
              wordBreak: 'break-word',
              width: '100%',
              fontFamily: "'Open Sans', sans-serif"
            }}
          >
            {texto}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Resultado;