import React, { Component } from 'react';
import MenuScreen from './MenuComponent';
import HomeScreen from './HomeComponent';
import ContactScreen from './ContactComponent';
import AboutScreen from './AboutComponent';
import DishDetailScreen from './DishDetailComponent';
import FavoritesScreen from './FavoriteComponent';
import LoginScreen from './LoginComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import ReservationScreen from './ReservationComponent';

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

const navConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
}


const MenuNavigator = createStackNavigator(
  {
    Menu: MenuScreen,
    DishDetail: DishDetailScreen,
  },
  {
    initialRouteName: 'Menu',
    ...navConfig
  }
);

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    DishDetail: DishDetailScreen,
  },
  {
    initialRouteName: 'Favorites',
    ...navConfig
  }
);
const LoginNavigator = createStackNavigator({
  Login: LoginScreen
}, navConfig);

const HomeNavigator = createStackNavigator({
  Home: HomeScreen
}, navConfig);

const ContactNavigator = createStackNavigator({
  Contact: ContactScreen
}, navConfig);

const AboutNavigator = createStackNavigator({
  About: AboutScreen
}, navConfig);

const ReservationNavigator = createStackNavigator({
  Reservation: ReservationScreen
}, navConfig);



// Drawer navigator
// https://reactnavigation.org/docs/4.x/drawer-based-navigation/
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
    screen : AboutNavigator
  },
  Reservation: {
    screen : ReservationNavigator
  },
  Favorites: {
    screen : FavoritesNavigator
  },
  Login : {
    screen : LoginNavigator
  }
}, {
  drawerBackgroundColor : "green"
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