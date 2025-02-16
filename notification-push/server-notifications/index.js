const Expo = require('expo-server-sdk').default;
const expo = new Expo();

// TOKEN
const TOKEN = 'ExponentPushToken[l60L5VII0q8Z98StK-WHSk]';

sendNotification(TOKEN);

async function sendNotification(token) {
    if (Expo.isExpoPushToken(token)) {
        const notificationResponse = await expo.sendPushNotificationsAsync([
            {
                to: token,
                title: 'Notification météo 🌤️',
                body: 'Ceci est une notification du serveur !',
                data: {
                    infos: 'Info 1',
                },
                sound: 'default',
            },
        ]);
        console.log(notificationResponse);
    } else console.log('Token invalide ❌');
}
