import React from 'react';
import { View, Text } from 'react-native';

export default class App extends React.Component {
    componentDidMount() {
        console.log('Called first time');
    }
    render() {
        return (
            <View>
                <Text>hi</Text>
            </View>
        )
    }
}