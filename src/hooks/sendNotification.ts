import { useState, useEffect } from "react";
import {LocalNotifications, ScheduleOptions} from '@capacitor/local-notifications';
  
export function processNotification() {
    const notification = async () => {
        LocalNotifications.schedule({
            notifications: [{
                title: "test", id: 0, body: "testing body!", schedule: {every: 'second'}
            }]
        })
    };

    return {notification};
}

export async function scheduleNotification() {
    console.log("schedule func ran!");
    
    try {
        await LocalNotifications.checkPermissions();
        console.log('Current Permission Status: ', LocalNotifications.checkPermissions());
    }
    catch(err) {
        console.log('ERROR CHECK: ', err);
    }


    try {
        await LocalNotifications.requestPermissions();
        console.log('Current Permission Status: ', LocalNotifications.checkPermissions());
    }
    catch(err) {
        console.log('ERROR REQ: ', err);
    }


    let options: ScheduleOptions = {
        notifications: [
            {
                id: 111,
                title: 'Reminder Notification',
                body: 'Test body',
                largeBody: 'Bigger test body',
                summaryText: 'Summary test',
            }
        ]
    }

    try {
        await LocalNotifications.schedule(options);
    }
    catch(err) {
        alert(JSON.stringify(err));
    }
}