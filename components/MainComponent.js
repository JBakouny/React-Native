import React, { Component } from 'react';
import MenuScreen from './MenuComponent';
import HomeScreen from './HomeComponent';
import { DISHES } from '../shared/dishes';
import DishDetailScreen from './DishDetailComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MenuNavigator = createStackNavigator(
  {
    Menu: MenuScreen,
    DishDetail: DishDetailScreen,
  },
  {
    initialRouteName: 'Menu'
  }
);

const HomeNavigator = createStackNavigator({
  Home: HomeScreen
});

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Menu: {
    screen: MenuNavigator,
  },
});

const MainContainer = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
 
    return (
        <MainContainer />
    );
  }
}
  
export default Main;