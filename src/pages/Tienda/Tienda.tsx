import {
  IonContent,
  IonPage,
  IonModal,
  IonButton,
  IonInput,
  IonLabel,
  IonLoading,
} from '@ionic/react';
import './Tienda.css';
import { useState } from 'react';

const Tienda: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [tarjeta, setTarjeta] = useState('');
  const [vencimiento, setVencimiento] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePlanClick = () => setShowPaymentModal(true);

  const handleFormSubmit = () => {
    setShowFormModal(false);
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      setShowSuccess(true);
      localStorage.setItem('pago_exitoso', 'true');
      localStorage.setItem('metodo_pago', tarjeta);
    }, 2000);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="tienda-bg">
        <img
          src="/images/pmensual.png"
          alt="Plan Mensual"
          className="plan-img plan-mensual"
          onClick={handlePlanClick}
        />
        <img
          src="/images/Psemestral.png"
          alt="Plan Semestral"
          className="plan-img plan-semestral"
          onClick={handlePlanClick}
        />
        <img
          src="/images/Panual.png"
          alt="Plan Anual"
          className="plan-img plan-anual"
          onClick={handlePlanClick}
        />

        {/* Primer panel: Agregar método de pago */}
        <IonModal isOpen={showPaymentModal} onDidDismiss={() => setShowPaymentModal(false)}>
          <div className="modal-panel">
            <IonButton
              expand="block"
              color="primary"
              onClick={() => {
                setShowPaymentModal(false);
                setShowFormModal(true);
              }}
            >
              Agregar método de pago
            </IonButton>
          </div>
        </IonModal>

        {/* Segundo panel: Formulario tarjeta */}
        <IonModal isOpen={showFormModal} onDidDismiss={() => setShowFormModal(false)}>
          <div className="modal-panel">
            <IonLabel className="modal-label">Número de tarjeta</IonLabel>
            <IonInput
              className="modal-input"
              value={tarjeta}
              onIonChange={(e) => setTarjeta(e.detail.value!)}
              placeholder="1234 5678 9012 3456"
            />
            <IonLabel className="modal-label">Vencimiento</IonLabel>
            <IonInput
              className="modal-input"
              value={vencimiento}
              onIonChange={(e) => setVencimiento(e.detail.value!)}
              placeholder="MM/AA"
            />
            <IonLabel className="modal-label">CVV</IonLabel>
            <IonInput
              className="modal-input"
              value={cvv}
              onIonChange={(e) => setCvv(e.detail.value!)}
              placeholder="123"
              type="password"
            />
            <IonButton expand="block" color="success" onClick={handleFormSubmit}>
              Pagar
            </IonButton>
          </div>
        </IonModal>

        {/* Cargando */}
        <IonLoading isOpen={showLoading} message={'Procesando pago...'} />

        {/* Éxito */}
        <IonModal isOpen={showSuccess} onDidDismiss={() => setShowSuccess(false)}>
          <div className="modal-panel">
            <h2 style={{ textAlign: 'center', color: 'green' }}>¡Pago realizado con éxito!</h2>
            <IonButton expand="block" onClick={() => setShowSuccess(false)}>
              Aceptar
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tienda;
