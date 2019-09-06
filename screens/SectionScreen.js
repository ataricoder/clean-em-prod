import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class SectionScreen extends React.Component {
  static navigationOptions = {
    title: "Booking"
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>Monday, September 9</Text>
          <Text2>Home Cleaning</Text2>
          <Text3>1 Bed/1 Bath</Text3>
          <Text4>2100 Rio Grande St, Austin, TX 78705. Apt 319</Text4>
          <Edit>
            <Text5>Edit</Text5>
          </Edit>
          <Cancel>
            <Text6>Cancel</Text6>
          </Cancel>
        </Content>
      </Container>
    );
  }
}

export default SectionScreen;

const Text5 = styled.Text`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const Text6 = styled.Text`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const Edit = styled.View`
  width: 335px;
  height: 60px;
  background-color: #4abbed;
  margin-top: 40px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  justify-content: center;
`;

const Cancel = styled.View`
  width: 335px;
  height: 60px;
  background-color: #ff5b82;
  margin-top: 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  justify-content: center;
`;

const Content = styled.View``;

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Text = styled.Text`
  font-size: 28px;
  color: #3c4560;
  font-weight: bold;
`;

const Text2 = styled.Text`
  font-size: 24px;
  color: #3c4560;
  font-weight: 500;
  padding-top: 20px;
`;

const Text3 = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  padding-top: 20px;
`;

const Text4 = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  padding-top: 20px;
`;
