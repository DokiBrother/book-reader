import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <ImageBackground source={require("../assets/image/BGlogin.jpg")} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/image/logo.png")} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your user name"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.sp_button}>Register now!</Text>
          </TouchableOpacity>
          <View style={{width: Dimensions.get('window').width/10}}></View>
          <TouchableOpacity>
            <Text style={styles.sp_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
  
        <TouchableOpacity
          style={styles.loginBtn}
          onPress = {() => navigation.navigate('Main')}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  image: {
    marginBottom: 40,
    width: 200,
    height: 200,
  },
 
  inputView: {
    backgroundColor: "#38b000",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white'
  },
 
  sp_button: {
    height: 30,
    marginBottom: 30,
    color: 'white'
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#38b000",
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default LoginScreen;
