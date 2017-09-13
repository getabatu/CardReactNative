import React, { Component } from 'react';
import {AppRegistry, Image, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';


export default class CardAnis extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
              <View style={{flexDirection:'row'}}>
                <Image
                style = {{width: 35,height:35,padding:10}}
                source = {require('./components/img/nativebase.png')}
                />
                <Text style = {{paddingLeft:10}}>NativeBase {'\n'} Aprill 15, 2016</Text>
              </View>
                <Image
                  style = {{
                    flex:1,
                    width:320,
                    height:150,
                    backgroundColor:'#f5f5f5',
                    marginBottom:5,
                    padding:5,
                    borderRadius:5,
                    borderColor:'#000'
                  }}
                  source = {require('./components/img/view.jpg')}
                />
                <Text>NativeBase is a free and, source framework that enable developers so build high qualitymobil apps using React Native ios and android apps with fusion of C96.</Text>
                <Text style = {{color:'skyblue', paddingTop: 20,}}>
                  <Image
                    style = {{
                    paddingTop:10,
                    width:30,
                    height:30,
                    }}
                    source = {require('./components/img/github.png')}
                  />
                  1,926 rates
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('CardAnis', ()=> CardAnis);