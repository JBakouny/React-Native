import React, { Component } from 'react';
import { FlatList, Button, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

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
                  <History />
                  <Card
                      title='Corporate Leadership'>
                      <Loading />
                  </Card>
              </ScrollView>
          );
        }
        else if (this.props.leaders.errMess) {
            return(
                <ScrollView>
                    <History />
                    <Card
                        title='Corporate Leadership'>
                        <Text>{this.props.leaders.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        else {
            return(
            <View>
                <FlatList 
                    data={this.props.leaders.leaders}
                    renderItem={renderLeader}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={<Button
                    onPress={() => this.props.navigation.openDrawer()}
                    title="Drawer"
                    />}
                    />
            </View>
          );
        }
  }

}

export default connect(mapStateToProps)(About);