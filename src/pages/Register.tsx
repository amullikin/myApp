import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  async function register() {
    const res = await registerUser(username, password)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)}>
      </IonInput>
      <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}>
      </IonInput>
      <IonInput type="password" placeholder="Confirm Password" onIonChange={(e: any) => setCPassword(e.target.value)}>
      </IonInput>
      <IonButton onClick={register}>
        Register
      </IonButton>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
