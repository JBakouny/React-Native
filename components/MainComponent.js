import React, { Component } from 'react';
import MenuScreen from './MenuComponent';
import HomeScreen from './HomeComponent';
import ContactScreen from './ContactComponent';
import AboutScreen from './AboutComponent';
import DishDetailScreen from './DishDetailComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})


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

const ContactNavigator = createStackNavigator({
  Contact: ContactScreen
});


const AboutNavigator = createStackNavigator({
  About: AboutScreen
});

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Menu: {
    screen: MenuNavigator,
  },
  Contact : {
    screen : ContactNavigator
  },
  About : {
    screen : AboutScreen
  }
});

const MainContainer = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
 
    return (
        <MainContainer />
    );
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);