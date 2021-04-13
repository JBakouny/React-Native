import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';


 class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

     render() {

        const renderLeaders = ({item, index}) => {
            return (
                    <ListItem key={index} bottomDivider>
                    <Avatar source={ require('./images/alberto.png') }/>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
            );
        };

        return(
                <FlatList 
                    data={this.state.leaders}
                    renderItem={renderLeaders}
                    keyExtractor={item => item.id.toString()}
                    />
        );
    }
}

 export default About;