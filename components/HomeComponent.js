import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <View><Text>Home Component</Text>
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Drawer"
            />
            </View>
        );
    }
}

export default Home;