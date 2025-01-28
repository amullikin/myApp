import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function loginUser() {
    console.log(username, password)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
      <IonButton onClick={loginUser}>
        Login
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
