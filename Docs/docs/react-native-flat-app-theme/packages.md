# Packages Used

_package.json_

<pre class="line-numbers"><code class="language-json">{
  "name": "StrapFlatApp",
  "version": "9.1.0",
  "private": true,
  "devDependencies": {
    "@babel/plugin-proposal-class-properties": "^7.4.4",
    "babel-eslint": "10.0.1",
    "babel-plugin-module-resolver": "3.2.0",
    "eslint": "5.16.0",
    "eslint-plugin-flowtype": "3.9.0",
    "eslint-plugin-import": "2.17.2",
    "eslint-plugin-jsx-a11y": "6.2.1",
    "eslint-plugin-prettier": "^2.6.2",
    "eslint-plugin-react": "7.13.0",
    "eslint-plugin-react-native": "3.7.0",
    "flow-bin": "0.98.1",
    "flow-typed": "2.5.2",
    "gulp": "4.0.2",
    "husky": "2.3.0",
    "jest": "24.8.0",
    "jest-expo": "^32.0.0",
    "prettier": "1.17.1",
    "react-native-scripts": "2.0.1",
    "react-test-renderer": "16.8.6"
  },
  "main": "./node_modules/expo/AppEntry.js",
  "scripts": {
    "postinstall": "remotedev-debugger",
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "eject": "expo eject",
    "test": "eslint ."
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!(react-native|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-native-swiper|react-navigation|native-base|@expo|react-native-scrollable-tab-view|react-native-simple-modal)/)"
    ]
  },
  "dependencies": {
    "babel-preset-expo": "^5.1.1",
    "color": "3.1.1",
    "expo": "32.0.0",
    "jest-cli": "24.8.0",
    "lodash": "4.17.11",
    "moment": "2.24.0",
    "native-base": "2.8.2",
    "react": "16.8.0",
    "react-native": "0.57.8",
    "react-native-calendars": "1.169.0",
    "react-native-carousel-view": "^0.5.1",
    "react-native-easy-grid": "0.2.1",
    "react-native-easy-toast": "^1.2.0",
    "react-native-modalbox": "1.7.1",
    "react-native-vector-icons": "^6.5.0",
    "react-navigation": "3.9.1",
    "react-redux": "^6.0.1",
    "reazy-native-router-actions": "0.0.2",
    "redux": "4.0.1",
    "redux-form": "8.2.0",
    "redux-persist": "5.10.0",
    "redux-thunk": "2.3.0",
    "remote-redux-devtools": "0.5.16",
    "remote-redux-devtools-on-debugger": "^0.8.3",
    "whatwg-fetch": "^3.0.0"
  }
}


</code></pre>
