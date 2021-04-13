import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { View, FlatList, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

class Menu extends Component {

  constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES
      };
  }

  static navigationOptions = {
      title: 'Menu'
  };

  render() {

    const { navigate } = this.props.navigation;

    const renderMenuItem = ({item, index}) => {

        return (
                <ListItem key={index} onPress={() => navigate('DishDetail', { dishId: item.id })} bottomDivider>
                  <Avatar source={ require('./images/uthappizza.png') }/>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
        );
    };

    return (
      <View>
            <FlatList 
                data={this.state.dishes}
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

export default Menu;