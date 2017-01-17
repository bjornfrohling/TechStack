import React, {Component} from 'react';
import {CardSection} from './common';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
// Import all available actions
import * as actions from '../actions';

class ListItem extends Component {

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 10,
        paddingRight: 10
    }
};

// ConnectHelper, 1st parameter props, 2nd parameter actions (bind actionCreator
// to component)
export default connect(null, actions)(ListItem);