import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Spinner } from './common';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { energy: '', money_saved: '', charging_status: '', days: '' };
    }

    componentDidMount() {
        return fetch('https://helllabs-app.herokuapp.com/device/metrics')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({ energy: Math.round(responseJson.energy),
                money_saved: Math.round(responseJson.money_saved),
                charging_status: responseJson.charging_status,
                days: responseJson.days });
        })
        .catch((error) => {
            console.error(error);
        });
    }

    toLoadOrNotToLoad() {
        if (this.state.energy === ''){
            return (
                <Spinner />
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 4, width: 300, marginBottom: 10 }}>
                <Header headerText={this.props.userDetail.name} />
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#2EC4B6' }}>
                        <Text style={styles.text}>Charging Status</Text>
                        <Text style={styles.text2}>{this.state.charging_status}</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#E71D36' }}>
                        <Text style={styles.text}>Energy Saved</Text>
                        <Text style={styles.text2}>{this.state.energy}</Text>
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#1A535C' }}>
                        <Text style={styles.text}>Money Saved</Text>
                        <Text style={styles.text2}>{this.state.money_saved}</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#FF9F1C' }}>
                        <Text style={styles.text}>Days Consumed</Text>
                        <Text style={styles.text2}>{this.state.days}</Text>
                    </View>
                </View>
                {this.toLoadOrNotToLoad()}
            </View>
        );
    }
}

const styles = {
    text: {
        padding: 20,
        color: '#FDFFFC',
        margin: 5,
        textAlign: 'center',
        fontSize: 18
    },
    text2: {
        padding: 20,
        color: '#FDFFFC',
        margin: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
};
