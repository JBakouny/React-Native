import React, { Component } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

function RenderItem(props) {
    
        const item = props.item;


    if (props.isLoading) {
        return(
                <Loading />
        );
    }
    else if (props.errMess) {
        return(
            <View> 
                <Text>{props.erreMess}</Text>
            </View>
        );
    }
    else {        
        if (item != null) {
            return(
                <Card>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: baseUrl + item.image}}/>
                    <Text style={{margin: 10}}>
                        {item.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
    }
}

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        
        return(
            <ScrollView>
                <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Drawer"
                />
                <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    isLoading={this.props.dishes.isLoading}
                    erreMess={this.props.dishes.erreMess} 
                    />
                <RenderItem item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    erreMess={this.props.promotions.erreMess} 
                    />
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    isLoading={this.props.leaders.isLoading}
                    erreMess={this.props.leaders.erreMess} 
                    />
            </ScrollView>
        );
    }
}
export default connect(mapStateToProps)(Home);