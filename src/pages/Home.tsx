import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [input, setInput] = useState<string>('')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First Programming Assignment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonInput value={input} onIonChange={(e: any) => setInput(e.target.value)}>

        </IonInput>       
        <IonButton routerLink="/example">
          click :D
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
