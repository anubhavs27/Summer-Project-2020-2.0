//Account Registeration with checkbox and sign in button

import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  ListItem,
  CheckBox
} from "native-base";

export default class Placeholder extends Component {
  handleSubmitRegister = () => {
    this.props.navigation.navigate("IntroScreen")
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <Text>Full name</Text>
          <Form>
            <Item regular>
              <Input placeholder="Enter your full name...." />
            </Item>
          </Form>

          <Text block style= {{ marginTop: 5}}>Email ID</Text>
          <Form>
            <Item regular>
              <Input placeholder="Enter your email id...." />
            </Item>
          </Form>

          <Text block style= {{ marginTop: 5}}>Password</Text>
          <Form>
            <Item regular>
              <Input placeholder="Enter a password...." />
            </Item>
          </Form>

          <Text block style= {{ marginTop: 5}}>Re-enter Password</Text>
          <Form>
            <Item regular>
              <Input placeholder="Re-enter the password...." />
            </Item>
          </Form>

          <Text block style= {{ marginTop: 5}}>Delivery Address</Text>
          <Form>
            <Item regular>
              <Input placeholder="Enter your delivery location..." />
            </Item>
          </Form>



          <CheckboxandButton onSubmitRegister={this.handleSubmitRegister}></CheckboxandButton>

        </Content>
      </Container>
    );
  }
}

class CheckboxandButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  
  render() {
    return (
      <Container style={styles.container}>
        
        <Content>
          <ListItem button onPress={() => this.toggleSwitch1()}
                    block style= {{margin: 10, marginTop: 20}}>
            <CheckBox
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>I agree to the app's terms and conditions.</Text>
            </Body>
          </ListItem>
          <Button block style={{ margin: 15, marginTop: 20 }} onPress={this.props.onSubmitRegister}>
            <Text>Register</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});