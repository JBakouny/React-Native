import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Animated, Text, Button, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
// see https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { deleteFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      favorites: state.favorites
    }
  }

const mapDispatchToProps = dispatch => ({
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
})

class Favorites extends Component {

    static navigationOptions = {
        title: 'My Favorites'
    };

    

    render() {

        const { navigate } = this.props.navigation;
        
        const renderMenuItem = ({item, index}) => {
            const onPressAction = () => {
                Alert.alert(
                    'Delete Favorite?',
                    'Are you sure you wish to delete the favorite dish ' + item.name + '?',
                    [
                        { 
                            text: 'Cancel', 
                            onPress: () => console.log(item.name + 'Not Deleted'),
                            style: ' cancel'
                        },
                        {
                            text: 'OK',
                            onPress: () => this.props.deleteFavorite(item.id)
                        }
                    ],
                    { cancelable: false }
                );
                
            }

                const styles = StyleSheet.create({
                    leftAction: {
                      flex: 1,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                    },
                    actionText: {
                      color: 'white',
                      fontSize: 16,
                      backgroundColor: 'transparent',
                      padding: 10,
                    }
                  });
                  
                  // see https://docs.swmansion.com/react-native-gesture-handler/docs/example
                const leftButton = (progress, dragX) => {
                    const trans = dragX.interpolate({
                      inputRange: [0, 50, 100, 101],
                      outputRange: [-20, 0, 0, 1],
                    });
                    return (
                      <RectButton style={styles.leftAction} onPress={onPressAction}>
                        <Animated.Text
                          style={[
                              styles.actionText,
                            {
                              transform: [{ translateX: trans }],
                            },
                          ]}>
                          Delete
                        </Animated.Text>
                      </RectButton>
                    );
                  };

            return (
                <Swipeable
                    renderLeftActions={leftButton} >
                    <ListItem key={index} onPress={() => navigate('DishDetail', { dishId: item.id })} bottomDivider>
                        <Avatar source={{ uri: baseUrl + item.image}}/>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </Swipeable>
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
                    <Text>{this.props.dishes.errMess}</Text>
                </View>            
            );
        }
        else {
            return (
                <View>
                    <FlatList 
                    data={this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => el === dish.id))}
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


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);