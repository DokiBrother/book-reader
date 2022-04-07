import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CategoryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={require('../assets/image/BGapp.jpg')} resizeMode = "cover" style={{flex: 1, justifyContent: 'center'}} >
            <View style={{flex: 1, margin: 20, borderRadius: 15, backgroundColor: 'white'}}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress = {() => navigation.navigate('Home')}
            >
              <Text style={styles.loginText}>GO HOME</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#38b000",
  },
});

export default CategoryScreen;
