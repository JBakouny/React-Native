import React, { Component } from 'react';
import { View, FlatList, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
  }

class Menu extends Component {

  static navigationOptions = {
      title: 'Menu'
  };

  render() {

    const { navigate } = this.props.navigation;

    const renderMenuItem = ({item, index}) => {

        return (
                <ListItem key={index} onPress={() => navigate('DishDetail', { dishId: item.id })} bottomDivider>
                  <Avatar source={{ uri: baseUrl + item.image}}/>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
        );
    };

    if (this.props.dishes.isLoading) {
        return(
            <Loading />
        );
    }
    else if (this.props.dishes.errMess) {
        return(
            <View>            
                <Text>{props.dishes.errMess}</Text>
            </View>            
        );
    }
    else {
        return (
          <View>
            <FlatList 
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Drawer"
            />
          </View>
        );
    }
  }
}

export default connect(mapStateToProps)(Menu);