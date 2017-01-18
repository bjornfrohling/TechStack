import React, {Component} from 'react';
import {CardSection} from './common';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
// Import all available actions
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription(willExpand) {
        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

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
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }

} // end class

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

// will show up as props in our component
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return {expanded};
};

// ConnectHelper, 1st parameter props, 2nd parameter actions (bind actionCreator
// to component)
export default connect(mapStateToProps, actions)(ListItem);