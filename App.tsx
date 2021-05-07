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
  Text,
  TextInput,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
// import Config from 'react-native-config';
import {observer} from 'mobx-react-lite';
import {stores} from './stores';

const App = observer(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const [value, setValue] = useState<string>('');
  const {todosStore} = stores;
  const {todos} = todosStore;

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#03A9F4',
    padding: 15,
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // const func = async () => {
    //   const res = await NativeModules.Counter.log('Hello from React Native!');
    //   console.log('Res: ', res);
    //   // const res = await NativeModules.TestBridge.getVersionCode();
    // };
    // func();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          TODO App
        </Text>
        <View style={{marginVertical: 20}}>
          <TextInput
            placeholder="Add todo"
            onChangeText={_value => setValue(_value)}
            onSubmitEditing={e => {
              stores.todosStore.addTodo(e.nativeEvent.text);
              setValue('');
            }}
            value={value}
            style={{backgroundColor: '#fff', height: 40, paddingLeft: 10}}
          />
        </View>
        {!stores.ready && <ActivityIndicator color="#fff" />}
        {!todosStore.isEmpty() && (
          <>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 10,
              }}>
              Todos
            </Text>
            {todos.map((todo, index) => (
              <Text
                key={index}
                style={{
                  fontWeight: 'bold',
                  height: 40,
                  backgroundColor: '#1565C0',
                  color: '#fff',
                  marginVertical: 2,
                  lineHeight: 40,
                  paddingLeft: 20,
                }}>
                {index + 1}. {todo}
              </Text>
            ))}
            <View style={{marginVertical: 30}}>
              <Text
                style={{fontSize: 18, color: '#fff', alignSelf: 'flex-end'}}
                onPress={() => stores.todosStore.reset()}>
                RESET
              </Text>
            </View>
          </>
        )}
        {stores.ready && todosStore.isEmpty() && (
          <Text style={{color: '#fff', alignSelf: 'center'}}>
            No records found!
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
});

export default App;
