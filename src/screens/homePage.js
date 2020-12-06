import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Footer, List, ListItem, FooterTab, Button, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        testData = []
        for (i = 0; i < 30; i ++){
            testData.push(
                {
                "title": "food Option" + i,
                "description": "description" + i
                }
            )
        }  
        this.state = {
            data:testData,
            loading: true
        };
        /*for (i = 0; i < length(props.restaurants); i++){
            data.push(
                {
                    "title": props.restaurants[i],
                    "description": props.restaurants[i]
                }
            )
        }*/
    }

    async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    render() {
        if (!this.state.loading){
            return (
                <Container>
                    <Content>
                        <List  
                        dataArray = {this.state.data}
                        renderRow = {(listItem) => 
                            <ListItem>
                            <Text> {listItem.title} </Text>
                            <Text> {listItem.description} </Text>
                            </ListItem>
                        }>
                        </List> 
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button>
                                <Text>Account</Text>
                            </Button>
                            <Button>
                                <Text>Search</Text>
                            </Button>
                            <Button active>
                                <Text>Help</Text>
                            </Button>
                        </FooterTab>
                </Footer>
            </Container>
            );
        }
        else{
            return (
                <Container>
                </Container>
            )
        }
    }
  }