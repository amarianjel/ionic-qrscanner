<div align="center">

#  [QR Scanner](https://ionicframework.com/) &middot; [<img src="https://i.postimg.cc/wT4x8tWS/codepenblanco.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://codepen.io/amarianjel/)   [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" height="30px" />](https://github.com/amarianjel)   [<img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" alt="GitHub" class="footer-nav__link-image" height="70px" style="margin-bottom: -20px;"/>](https://amarianjel.github.io/Portfolio/)  [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.linkedin.com/in/amarianjel/)   [<img src="https://i.postimg.cc/1zqYRTyp/facebook.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.facebook.com/Abraham13071993/)   [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" height="30px" />](https://www.instagram.com/abr_marianjel/)
[![forthebadge](https://img.shields.io/badge/Made%20with-Ionic-blue.svg)](https://ionicframework.com/)
![Quicktype](https://img.shields.io/badge/Quicktype-%E2%9A%99%EF%B8%8F-orange)
[![forthebadge](https://img.shields.io/badge/Angular-%F0%9F%8C%8D-red.svg)](https://angular.io/)
![Android](https://img.shields.io/badge/Android-%F0%9F%93%B1-brightgreen)
![InAppBrowser](https://img.shields.io/badge/InAppBrowser-%F0%9F%8C%8F%F0%9F%93%B6-yellow)
![Capacitor](https://img.shields.io/badge/Capacitor-%F0%9F%94%8C-blueviolet)
![Social Sharing Plugin](https://img.shields.io/badge/Social%20Sharing%20Plugin-%E2%86%95%EF%B8%8F%F0%9F%94%BD-lightgrey)


</div>

<div align="center">
  <p align="center">
    <img src="https://i.postimg.cc/wMRkmnnQ/ionic.png" alt="Logo Ionic">
  </p>
</div>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


# Ciclo de vida de un componente en Ionic
https://ionicframework.com/docs/v3/api/navigation/NavController/#viewDidEnter

### Desactivar Capacitor
Desactivar Capacitor
```ionic integrations disable capacitor```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# Cordova
https://danielsogl.gitbook.io/awesome-cordova-plugins/barcode-scanner

## Desplegar en Cordova
```ionic cordova prepare android```
Version para desplegar
```ionic cordova build android```
### Live Reload
```ionic cordova run android -l```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# Capacitor
```ionic build --prod --service-worker```
## Desplegar en Capacitor
Generar carpeta www
```ionic build```
Para las instalaciones en capacitor: 
```npm install @capacitor/android```
```npx cap add android```
Para correr: Este genera un build nuevo
```npx cap run android```

### Live Reload
```ionic cap run android -l --external```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

# Capacitor Plugins
```npm install @capacitor-community/barcode-scanner```
```npx cap sync```

Para manifest:
https://www.npmjs.com/package/@capacitor-community/barcode-scanner


```android
<?xml version='1.0' encoding='utf-8'?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools">
    <application android:allowBackup="true" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:roundIcon="@mipmap/ic_launcher_round" android:supportsRtl="true" android:theme="@style/AppTheme" android:usesCleartextTraffic="true" android:hardwareAccelerated="true">
        <activity android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode" android:exported="true" android:label="@string/title_activity_main" android:launchMode="singleTask" android:name=".MainActivity" android:theme="@style/AppTheme.NoActionBarLaunch">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <provider android:authorities="${applicationId}.fileprovider" android:exported="false" android:grantUriPermissions="true" android:name="androidx.core.content.FileProvider">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/file_paths" />
        </provider>
    </application>
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-sdk tools:overrideLibrary="com.google.zxing.client.android" />
</manifest>

```
![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# InAppBrowser por Browser de Capacitor
https://ionicframework.com/docs/native/browser
```
npm install @capacitor/browser
npx cap sync
```
![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# Api Key Google Maps y Capacitor

[Doc de Capacitor](https://ionicframework.com/docs/native/google-maps)