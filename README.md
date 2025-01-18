# 🌤️ Weather App - Votre météo en un clin d'œil !

L'application **Weather App** est conçue pour vous fournir des informations météo précises et intuitives. Développée avec **React Native** et optimisée avec **Expo**, elle offre des fonctionnalités complètes pour consulter la météo actuelle, rechercher une ville et explorer les prévisions sur 7 jours.

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

---

## 🧰 **Technologies utilisées**

### 📱 **React Native**

-   Développement natif multiplateforme pour iOS et Android.

### 🖼️ **Expo**

-   Gestion rapide des dépendances et des builds.

### 🛠️ **Modules et bibliothèques**

-   **Axios** : Gestion des requêtes API pour récupérer les données météo et géographiques.
-   **expo-font** : Chargement de la police personnalisée utilisée dans l'application.
-   **expo-location** : Accès à la géolocalisation de l'utilisateur.
-   **React Navigation** : Gestion des pages et navigation entre les écrans.
-   **expo-status-bar** : Personnalisation de la barre d'état du téléphone.

---

## 🗂️ **Structure du projet**

| **Dossier/Fichier**           | **Description**                                                        |
| ----------------------------- | ---------------------------------------------------------------------- |
| `/api/meteo.js`               | Fichier contenant les requêtes vers les APIs météo et géocodage.       |
| `/assets/fonts/`              | Polices personnalisées utilisées dans l'application.                   |
| `/assets/img/`                | Images comme les icônes météo ou les fonds d'écran.                    |
| `/components/Clock/`          | Composant pour afficher l'heure actuelle.                              |
| `/components/Meteo_basic/`    | Composant pour afficher les informations météo de base.                |
| `/components/Meteo_advanced/` | Composant pour les détails avancés (lever du soleil, vitesse du vent). |
| `/components/Searchbar/`      | Barre de recherche pour trouver une ville.                             |
| `/pages/Home/`                | Page principale affichant la météo actuelle.                           |
| `/pages/Forecast/`            | Page des prévisions météo sur 7 jours.                                 |
| `/services/`                  | Fichiers utilitaires pour interpréter la météo et gérer les dates.     |
| `App.js`                      | Point d'entrée principal de l'application.                             |

---

## 📚 **Détails de développement**

1. **Géolocalisation :**

    - Utilisation d'`expo-location` pour récupérer les coordonnées GPS.

    ```javascript
    const location = await getCurrentPositionAsync();
    setCoords({
        lat: location.coords.latitude.toString().replace(',', '.'),
        lng: location.coords.longitude.toString().replace(',', '.'),
    });
    ```

2. **Requêtes API :**

    - **Open-Meteo** pour récupérer les informations météo :

    ```javascript
    const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    ```

    - **Nominatim OpenStreetMap** pour convertir des coordonnées en nom de ville :

    ```javascript
    const {
        address: { city, village, town, state, country },
    } = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
    );
    ```

3. **Navigation entre les pages :**

    - Utilisation de **React Navigation** pour passer des données entre la page principale et celle des prévisions :

    ```javascript
    nav.navigate('Forecast', {
        city,
        ...weather.daily,
    });
    ```

4. **Interface utilisateur :**
    - Utilisation de composants réutilisables (`Meteo_basic`, `Searchbar`, etc.) pour un affichage organisé et propre.

---

## 🎨 **Design et styles**

-   Les styles sont gérés via **StyleSheet** de React Native pour des performances optimales.
-   Une police personnalisée `Alata-Regular` est chargée avec **expo-font**.
-   Le thème est épuré avec des couleurs naturelles pour une meilleure lisibilité.

---

## 👍 **Points forts**

-   **Multiplateforme** : Fonctionne parfaitement sur iOS, Android et le Web.
-   **Géolocalisation dynamique** : Obtenez instantanément la météo de votre position.
-   **Interface claire** : Une présentation soignée et intuitive.
-   **Recherche optimisée** : Trouvez facilement une ville et ses prévisions.

---

## 🌟 **Dépendances clés**

```json
"dependencies": {
    "axios": "^1.7.9",
    "expo": "~52.0.25",
    "expo-font": "^13.0.3",
    "expo-location": "~18.0.5",
    "expo-status-bar": "~2.0.1",
    "react": "18.3.1",
    "react-native": "0.76.6",
    "react-native-safe-area-context": "4.12.0",
    "@react-navigation/native": "6.1.1",
    "@react-navigation/native-stack": "6.9.7"
}
```

## 🚀 **Comment exécuter le projet**

### Prérequis

-   **Node.js** et **npm** installés sur votre machine.
-   **Expo CLI** installé globalement :
    npm install -g expo-cli

### Étapes pour démarrer

1. Installez les dépendances :

```bash
  npm install
```

2. Lancez l'application :

```bash
    npx expo start
```

3. Ouvrez l'application sur un émulateur ou un appareil physique :
    - Appuyez sur **`a`** pour Android.
    - Appuyez sur **`i`** pour iOS.
    - Scannez le QR code avec l'application **Expo Go**.
