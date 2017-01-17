import React, {Component} from 'react';
import {CardSection} from './common';
import {Text} from 'react-native';

class ListItem extends Component {

    render() {
        const {titleStyle} = styles;

        return (
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
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

export default ListItem;