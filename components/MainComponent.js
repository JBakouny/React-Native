import React, { Component } from 'react';
import MenuScreen from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetailScreen from './DishDetailComponent';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MenuNavigator = createStackNavigator(
  {
    Menu: MenuScreen,
    DishDetail: DishDetailScreen,
  },
  {
    initialRouteName: 'Menu'
  }
);

const MenuContainer = createAppContainer(MenuNavigator);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }

  render() {
 
    return (
        <MenuContainer />
    );
  }
}
  
export default Main;