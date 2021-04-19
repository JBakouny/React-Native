import React, { Component } from 'react';
import { FlatList, Button, ScrollView, Text } from 'react-native';
import { ListItem, Avatar, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
      leaders: state.leaders
    }
  }

 class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

     render() {

        const renderLeader = ({item, index}) => {
            return (
                    <ListItem key={index} bottomDivider>
                    <Avatar source= {{uri: baseUrl + item.image}}/>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
            );
        };

        if (this.props.leaders.isLoading) {
          return(
              <ScrollView>
                  <Card>
                      <Card.Title> Corporate Leadership</Card.Title>
                      <Loading />
                  </Card>
              </ScrollView>
          );
        }
        else if (this.props.leaders.errMess) {
            return(
                <ScrollView>
                    <Card>
                        <Card.Title> Corporate Leadership</Card.Title>
                        <Text>{this.props.leaders.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        else {
            return(
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <Card>
                            <Card.Title> Corporate Leadership</Card.Title>
                        <FlatList 
                            data={this.props.leaders.leaders}
                            renderItem={renderLeader}
                            keyExtractor={item => item.id.toString()}
                            ListFooterComponent={<Button
                            onPress={() => this.props.navigation.openDrawer()}
                            title="Drawer"
                            />}
                            />
                        </Card>
                    </Animatable.View>
                </ScrollView>
          );
        }
  }

}

export default connect(mapStateToProps)(About);