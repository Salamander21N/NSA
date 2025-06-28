import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import { useEffect, useState } from 'react';

const Register: React.FC = () => {
  const history = useHistory();

  // Estados para los inputs
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [enfermedad, setEnfermedad] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [alergia, setAlergia] = useState('');
  const [bloqueado, setBloqueado] = useState(true);

  useEffect(() => {
    const pagoExitoso = localStorage.getItem('pago_exitoso') === 'true';
    setBloqueado(!pagoExitoso);
  }, []);

  const handleBlockedClick = () => {
    history.push('/tienda');
  };

  const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;

    if (
      !nombre.trim() ||
      !fechaNacimiento ||
      !genero ||
      !enfermedad ||
      !correo.trim() ||
      !contrasena.trim()
    ) {
      alert('Por favor llene todos los datos');
      return;
    }

    const originalColor = '#FFC857';
    const clickedColor = '#4CAF50';
    button.style.backgroundColor = clickedColor;

    setTimeout(() => {
      button.style.backgroundColor = originalColor;
      history.replace('/menu');
    }, 200);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="register-bg" scrollY={true}>
        <label className="field-label" style={{ top: '40px', left: '30px' }}>Nombre</label>
        <input
          type="text"
          className="input-field"
          style={{ top: '70px', left: '30px' }}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label className="field-label" style={{ top: '120px', left: '30px' }}>Fecha de Nacimiento</label>
        <input
          type="date"
          className="input-field"
          style={{ top: '150px', left: '30px' }}
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />

        <label className="field-label" style={{ top: '200px', left: '30px' }}>Género</label>
        <select
          className="input-field select-black"
          style={{ top: '230px', left: '30px' }}
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>

        <label className="field-label" style={{ top: '280px', left: '30px' }}>Enfermedad</label>
        <select
          className="input-field select-black"
          style={{ top: '310px', left: '30px' }}
          value={enfermedad}
          onChange={(e) => setEnfermedad(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option>Diabetes tipo 1</option>
          <option>Diabetes tipo 2</option>
          <option>Diabetes tipo 3</option>
          <option>Colesterol alto</option>
          <option>Presión alta</option>
          <option>Asma</option>
          <option>Hipotiroidismo</option>
          <option>Hipertiroidismo</option>
          <option>Artritis reumatoide</option>
          <option>Enfermedad celíaca</option>
          <option>Obesidad</option>
          <option>Insuficiencia renal</option>
          <option>Cardiopatías</option>
        </select>

        <label className="field-label" style={{ top: '360px', left: '30px' }}>Correo Electrónico</label>
        <input
          type="email"
          className="input-field"
          style={{ top: '390px', left: '30px' }}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label className="field-label" style={{ top: '440px', left: '30px' }}>Contraseña</label>
        <input
          type="password"
          className="input-field"
          style={{ top: '470px', left: '30px' }}
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <label className="field-label" style={{ top: '520px', left: '30px' }}>Peso</label>
        <input
          type="number"
          className={`input-field ${bloqueado ? 'blocked-field' : ''}`}
          style={{ top: '550px', left: '30px' }}
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          onClick={bloqueado ? handleBlockedClick : undefined}
          readOnly={bloqueado}
        />

        <label className="field-label" style={{ top: '600px', left: '30px' }}>Altura</label>
        <input
          type="number"
          className={`input-field ${bloqueado ? 'blocked-field' : ''}`}
          style={{ top: '630px', left: '30px' }}
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          onClick={bloqueado ? handleBlockedClick : undefined}
          readOnly={bloqueado}
        />

        <label className="field-label" style={{ top: '680px', left: '30px' }}>Objetivo</label>
        <input
          type="text"
          className={`input-field ${bloqueado ? 'blocked-field' : ''}`}
          style={{ top: '710px', left: '30px' }}
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          onClick={bloqueado ? handleBlockedClick : undefined}
          readOnly={bloqueado}
        />

        <label className="field-label" style={{ top: '760px', left: '30px' }}>Alergia</label>
        <input
          type="text"
          className={`input-field ${bloqueado ? 'blocked-field' : ''}`}
          style={{ top: '790px', left: '30px' }}
          value={alergia}
          onChange={(e) => setAlergia(e.target.value)}
          onClick={bloqueado ? handleBlockedClick : undefined}
          readOnly={bloqueado}
        />

        <button
          className="menu-btn"
          style={{ top: '850px', left: '60px', width: '260px', height: '55px' }}
          onClick={handleRegisterClick}
        >
          Registrarse
        </button>
      </IonContent>
    </IonPage>
  );
};

export default Register;
