// import library
import React from 'react';
import { Text, View } from 'react-native';

// create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FDFFFC',
        alignItems: 'center',
        padding: 15,
        marginTop: 25,
        elevation: 10,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: '#011627',
        fontWeight: 'bold'
    }
};

//  make component available to other part of apps
export { Header };
