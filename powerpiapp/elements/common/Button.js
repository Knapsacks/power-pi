import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ sendOnPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={sendOnPress} style={buttonStyle}>
            <Text style={textStyle}>{ children }</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderColor: '#007AFF',
        borderWidth: 2 
    }
}

export { Button };
