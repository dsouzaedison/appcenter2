/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
// import Config from 'react-native-config';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {HelloWorld} from './components/hello-world/hello-world.component';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {/*<Text>ENV: {JSON.stringify(Config, 0, 4)}</Text>*/}
        <HelloWorld />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
