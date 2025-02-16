# ✨ Weather App

L'application **Weather App** est conçue pour fournir des informations météo précises et intuitives. Développée avec **React Native** et optimisée avec **Expo**, elle offre des fonctionnalités complètes pour consulter la météo actuelle, rechercher une ville et explorer les prévisions sur 7 jours.

---

## 🛠️ **Fonctionnalités principales**

1. **Météo actuelle :**

    - Température actuelle.
    - Condition météo (ex. : nuageux, ensoleillé).
    - Heures de lever et coucher du soleil.
    - Vitesse du vent.

2. **Recherche de ville :**

    - Saisie du nom d'une ville pour obtenir la météo.
    - Conversion automatique du nom en coordonnées géographiques.

3. **Prévisions sur 7 jours :**

    - Liste complète des prévisions quotidiennes.
    - Affichage des températures maximales.
    - Icônes météo et descriptions adaptées.

4. **Notifications Push :**
    - Envoi de notifications personnalisées sur l'état de la météo.
    - Intégration avec **Expo Notifications** et gestion des permissions.
    - Fonctionnement basé sur un serveur Node.js pour l'envoi des notifications.

---

## 🧪 **Notifications Push**

L'application prend en charge les **notifications push** via `expo-notifications`.

### 🛠️ Configuration

1. **Installer la dépendance :**

    ```bash
    npm install expo-notifications
    ```

2. **Demander la permission d’envoi des notifications :**

    ```javascript
    async function subscribeToNotifications() {
        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission non accordée');
            return;
        }

        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log('Expo Push Token:', token);
    }
    ```

3. **Envoyer une notification depuis un serveur :**

    ```javascript
    const Expo = require('expo-server-sdk').default;
    const expo = new Expo();

    async function sendNotification(token) {
        if (Expo.isExpoPushToken(token)) {
            const response = await expo.sendPushNotificationsAsync([
                {
                    to: token,
                    title: 'Notification météo 🌤️',
                    body: 'Voici votre mise à jour météo !',
                    sound: 'default',
                },
            ]);
            console.log(response);
        } else console.log('Token invalide');
    }
    ```

### 📈 Test des notifications

1. **Obtenir le token Expo** en vérifiant la console.
2. **Utiliser l'outil en ligne** [Expo Push Notification Tool](https://expo.dev/notifications) pour envoyer une notification test.
3. **Tester avec le serveur Node.js** en exécutant `sendNotification(TOKEN);`.

---

## 🔧 **Technologies utilisées**

-   **React Native** : Développement multiplateforme iOS/Android.
-   **Expo** : Gestion des dépendances et des builds.
-   **Axios** : Requêtes API.
-   **expo-font** : Chargement de polices personnalisées.
-   **expo-location** : Accès à la géolocalisation.
-   **expo-notifications** : Gestion des notifications push.
-   **React Navigation** : Navigation entre les écrans.

---

## 🚀 **Comment exécuter le projet**

### Prérequis

-   **Node.js** et **npm** installés.
-   **Expo CLI** installé :
    ```bash
    npm install -g expo-cli
    ```

### Lancer l'application

```bash
npm install
npx expo start
```

Scannez le QR code avec **Expo Go** pour tester sur un appareil physique.

---

Développé avec ❤️ par l'équipe Weather App
