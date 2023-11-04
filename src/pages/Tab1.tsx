import { IonButton, IonContent, IonFab, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
// custom imports
import { recordAudio } from '../hooks/recordAudio';
 
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Record</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab vertical='center' horizontal='center'>
          <IonButton onClick={() => recordAudio()}>Record Now!</IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
