import React, { Component } from 'react';
import {AppRegistry, Image, StyleSheet, View, Text, Linking} from 'react-native';


export default class CardAnis extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style ={styles.header}>
            <Text style={{color:'white'}}>Card Showcase</Text>
          </View>
          <View style={styles.body}>
              <View style={styles.tittle}>            
                <View style={{flexDirection:'row', shadowColor:'grey'}}>
                  <Image
                  style = {{width: 35,height:35,padding:10}}
                  source = {require('./components/img/nativebase.png')}
                  />
                  <Text style = {{paddingLeft:10}}>NativeBase {'\n'} Aprill 15, 2016</Text>
                </View>

                <Image
                  style = {styles.imageContainer}
                  source = {require('./components/img/view.jpg')}
                />

                <Text>NativeBase is a free and, source framework that enable developers so 
                  build high qualitymobil apps using React Native ios and android apps with 
                  fusion of C96.NativeBase is a free and, source framework that enable developers so 
                  build high qualitymobil apps using React Native ios and android apps with 
                  fusion of C96.NativeBase is a free and, source framework that enable developers so 
                  build high qualitymobil apps using React Native ios and android apps with 
                  fusion of C96.NativeBase is a free and, source framework that enable developers so 
                  build high qualitymobil apps using React Native ios and android apps with 
                  fusion of C96.</Text>
                
                <Text style = {{color:'skyblue', paddingTop: 20,}} onPress={() => Linking.openURL('http://github.com')}>
                  <Image
                    style = {{
                    padding:20,
                    width:15,
                    height:15,
                    }}
                    source = {require('./components/img/github.png')}
                  />
                  1,926 stars
                </Text>
              </View>
          </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
  header:{
    flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center' 
  },
  body: {
    flex:10, padding:15, backgroundColor:'#fff', 
  },
  tittle:{
    backgroundColor:'#fff',
    shadowColor:'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1, 
    padding: 10, 
    width:560, 
    height: 500
  },
  imageContainer: {
    flex:1,
    width:540,
    height:500,
    backgroundColor:'#f5f5f5',
    marginBottom:5,
    padding:10,
    borderRadius:5,
    borderColor:'#000'
  }
});

AppRegistry.registerComponent('CardAnis', ()=> CardAnis);