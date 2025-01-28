import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';
import { loginUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  async function login() {
    const res = await loginUser(username, password)
    if (res){
        history.push('/dashboard');
    }
    console.log(`${res ? 'Login success' : 'Login failed'}`)
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
      <IonButton onClick={login}>
        Login
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
