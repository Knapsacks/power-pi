import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.containerStyles}>
        {props.children}
    </View>
);

const styles = {
    containerStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDD',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

export { Card };
