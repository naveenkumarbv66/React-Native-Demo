# React Native Demo App

A simple React Native application built with Expo, featuring file-based routing and cross-platform support.

## 📱 Project Overview

This is a basic React Native Expo project that serves as a starting point for mobile app development. The app currently displays a simple "Home" screen and is configured to run on iOS, Android, and Web platforms.

## 🚀 Features

- **Cross-Platform**: Runs on iOS, Android, and Web
- **Expo Router**: File-based routing system
- **Modern React Native**: Built with React Native 0.81.4 and React 19.1.0
- **New Architecture**: Enabled for improved performance
- **Safe Area Support**: Handles device safe areas properly

## 🛠️ Tech Stack

- **React Native**: 0.81.4
- **React**: 19.1.0
- **Expo SDK**: ~54.0.10
- **Expo Router**: ~6.0.9
- **Node.js**: (Check your local version)

## 📋 Prerequisites

Before running this project, make sure you have:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally
- [Expo Go app](https://expo.dev/client) on your mobile device (for testing)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd React-Native-Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Running on Different Platforms

- **iOS Simulator**: `npm run ios`
- **Android Emulator**: `npm run android`
- **Web Browser**: `npm run web`
- **Expo Go App**: Scan the QR code with your mobile device

## 📁 Project Structure

```
React-Native-Demo/
├── app/
│   └── index.jsx          # Main home screen component
├── assets/
│   ├── adaptive-icon.png  # Android adaptive icon
│   ├── favicon.png        # Web favicon
│   ├── icon.png          # App icon
│   └── splash-icon.png   # Splash screen icon
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## ⚙️ Configuration

### App Configuration (`app.json`)

- **App Name**: Test
- **Version**: 1.0.0
- **Orientation**: Portrait
- **New Architecture**: Enabled
- **Platform Support**: iOS (tablet), Android, Web

### Dependencies

Key dependencies included:
- `expo-router`: File-based routing
- `expo-constants`: App constants access
- `expo-linking`: Deep linking support
- `expo-status-bar`: Status bar management
- `react-native-safe-area-context`: Safe area handling
- `react-native-screens`: Native screen optimization

## 🎨 Current Features

- Simple home screen with "Home" text
- Basic React Native component structure
- Expo Router setup (ready for additional screens)

## 🚧 Development Roadmap

- [ ] Add proper styling and UI components
- [ ] Implement navigation between screens
- [ ] Add state management (if needed)
- [ ] Create additional screens
- [ ] Add TypeScript support
- [ ] Implement testing framework
- [ ] Add error handling and loading states

## 📱 Platform-Specific Notes

### iOS
- Supports tablet devices
- Uses native iOS components

### Android
- Edge-to-edge display enabled
- Adaptive icon support
- Material Design components

### Web
- Responsive web design
- Favicon support

## 🔧 Available Scripts

- `npm start`: Start the Expo development server
- `npm run android`: Run on Android emulator
- `npm run ios`: Run on iOS simulator
- `npm run web`: Run in web browser

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx expo start --clear`
2. **Dependency conflicts**: Delete `node_modules` and run `npm install`
3. **iOS simulator not starting**: Check Xcode installation and simulator setup
4. **Android emulator issues**: Ensure Android Studio and SDK are properly configured

### Getting Help

- Check the [Expo documentation](https://docs.expo.dev/)
- Visit [React Native documentation](https://reactnative.dev/)
- Search [Expo forums](https://forums.expo.dev/) for community support

## 📄 License

This project is private and intended for educational purposes.

## 👥 Contributing

This is a demo project. For production use, consider:
- Adding proper error boundaries
- Implementing proper state management
- Adding comprehensive testing
- Setting up CI/CD pipeline
- Adding proper logging and analytics

## 📞 Support

For questions or issues related to this demo project, please refer to the official Expo and React Native documentation.

---

**Note**: This is a basic starter template. Customize and extend according to your project requirements.
