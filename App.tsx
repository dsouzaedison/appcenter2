/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  Text,
  NativeModules,
} from 'react-native';
// import Config from 'react-native-config';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {HelloWorld} from './components/hello-world/hello-world.component';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const func = async () => {
      const res = await NativeModules.Counter.log('Hello from React Native!');
      console.log('Res: ', res);
      // const res = await NativeModules.TestBridge.getVersionCode();
    };
    func();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {/*<Text>ENV: {JSON.stringify(Config, 0, 4)}</Text>*/}
        <HelloWorld />
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text>Count {count}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
