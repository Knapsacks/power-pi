import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Banner extends Component {
    
    render() {
        return (    
            <View style={{ flex: 4 }}>
                <View style={styles.smallBanner}><Text style={styles.smallBannerText}>Welcome To</Text></View>
                <View style={styles.bigBanner}><Text style={[styles.bigBannerText, { color: this.props.color }]}>Power-Pi</Text></View>
            </View>
        );
    }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#011627',
  },
  smallBanner: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  smallBannerText: {
    fontSize: 25,
    color: '#FDFFFC',
    fontFamily: 'Roboto'
  },
  bigBanner: {
    flex: 2,
    alignItems: 'center',
  },
  bigBannerText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#FDFFFC',
    fontFamily: 'Roboto'
  },
};
