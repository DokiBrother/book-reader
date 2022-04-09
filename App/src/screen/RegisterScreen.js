import React, {useState} from 'react';
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

const RegisterScreen = ({navigation}) => {

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

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm your password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Text style={styles.sp_button}>If you already have an account</Text>

        <TouchableOpacity onPress = {() => navigation.navigate('Login')} >
            <Text style={{color: '#ccff33', fontWeight: 'bold', fontSize: 16, alignSelf: 'center', textDecorationLine: 'underline'}}>Login here!</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>REGISTER</Text>
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

export default RegisterScreen;
