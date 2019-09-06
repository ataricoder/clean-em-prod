import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import Course from "../components/Course";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    return (
      <RootView>
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar source={require("../assets/avatar-2.jpg")} />
                </TouchableOpacity>
                <Title>Welcome Back,</Title>
                <Name>Daniel Munoz</Name>
              </TitleBar>
              <Subtitle>My Bookings</Subtitle>
              {courses.map((course, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.props.navigation.push("Section");
                  }}
                >
                  <Course
                    key={index}
                    author={course.author}
                    author2={course.author2}
                    author3={course.author3}
                    caption={course.caption}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 25px;
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 40px;
`;

const courses = [
  {
    author: "2100 Rio Grande St, Austin, TX 78705. Apt 319",
    caption: "Monday, September 9",
    author2: "Home Cleaning",
    author3: "1 Bed/1 Bath"
  },
  {
    author: "701 Brazos St, Austin, TX 78701. Floor 16",
    caption: "Thursday, September 12",
    author2: "Office Cleaning",
    author3: "2000 Square Feet"
  },
  {
    author: "2100 Rio Grande St, Austin, TX 78705. Apt 319",
    caption: "Friday, September 13",
    author2: "Deep Cleaning",
    author3: "3 Bed/3 Bath"
  },
  {
    author: "2100 Rio Grande St, Austin, TX 78705. Apt 319",
    caption: "Monday, September 16",
    author2: "Home Cleaning - 1 Bed/1 Bath",
    author3: "1 Bed/1 Bath"
  }
];
