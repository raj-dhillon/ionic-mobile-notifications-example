# ionic-mobile-notifications-example

## Installing Ionic

`npm install -g @ionic/cli native-run cordova-res`

## Installing Dependencies and Creating the App

1. Create the app: `ionic start photo-gallery tabs --type=react --capacitor`
2. Install Camera API and other dependencies (needed for the example starter that I used):  
   a. `npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem`  
   b. `npm install @ionic/pwa-elements`
3. Install local-notifications: `npm install @capacitor/local-notifications`
4. Install capacitor-voice-recorder: `npm install capacitor-voice-recorder`

## Recording Special Setup

- Add to Android Manifest: <br> `<uses-permission android:name="android.permission.RECORD_AUDIO" />` <br>
`<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`

## Deploying to iOS and Android

1. Create a fresh build of the project: `ionic build`
2. Create Android project: `ionic cap add android`
3. Create iOS project: `ionic cap add ios`
4. Copy changes from Web directory to native mobile: `ionic cap copy`
5. Sync changes: `ionic cap sync`

## Opening App on iOS

`ionic cap open ios`

## Opening App on Android

`ionic cap open android`

## Running App using Serve

`ionic serve`

