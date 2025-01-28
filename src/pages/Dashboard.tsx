import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';
import { loginUser } from '../firebaseConfig'

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    const res = await loginUser(username, password)
    console.log(`${res ? 'Login success' : 'Login failed'}`)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      <p>Hellooo</p>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;