Run Specific Emulator
    adb devices
    react-native run-android --deviceId=DEVICE_ID


VARIABEL DAN KONSTANTA DI FOLDER src/constants

DEPPENDANCY LIST
    UI Element
        react-native-elements
        native-base
        react-native-vector-icons
        react-native-paper
        react-native-svg
        react-native-loading-spinner-overlay
    State Management
        @reduxjs/toolkit
        react-redux
    Navigation & Route
        @react-navigation/native
        @react-navigation/native-stack
        react-native-safe-area-context
        react-native-screens
    API FETCH
        axios
    Security Storage
        react-native-keychain"
    DEBUG
        react-devtools
    CAMERA LIBRARY
        react-native-camera-camera

DEBUGGING
    jalankan react-devtools kemudian di emulator tekan ctrl+m

FETCH API
    untuk localhost gunakan 10.0.2.2 dibanding 127.0.0.1
    supaya port tidak konflik ketik diterminal adb -s <NAMA_EMULATOR> reverse tcp:8000 tcp:8000

COLOR FOR CONTENT LOADER (SCELETON)
    backgroundColor={'#e5e7e9'}
    foregroundColor={'#f8f8f8'}

SENANTIC VERSION FOR EVERY UPDATING APP