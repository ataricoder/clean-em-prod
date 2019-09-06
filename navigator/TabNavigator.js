import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Dashboard",
    tabBarIcon: <FontAwesomeIcon icon={faList} color={"#4775f2"} size={20} />
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen
});

CoursesStack.navigationOptions = {
  tabBarLabel: "New Booking",
  tabBarIcon: <FontAwesomeIcon icon={faPlus} color={"#b8bece"} size={20} />
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "Account",
  tabBarIcon: <FontAwesomeIcon icon={faUser} color={"#b8bece"} size={20} />
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
