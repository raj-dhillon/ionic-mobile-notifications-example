import { IonButton, IonContent, IonFab, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
// custom imports
import { processNotification, scheduleNotification } from '../hooks/sendNotification';

const Tab3: React.FC = () => {
  const {notification} = processNotification();
  // notification.then((e) => {console.log('NOTIFICATION: ', e)});
  // console.log('NOTIFICATION: ', notification);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab vertical='center' horizontal='center'>
          <IonButton onClick={() => scheduleNotification()}>Click Me!</IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
