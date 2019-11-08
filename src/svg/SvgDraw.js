
import React, { Component } from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Text,
    ART
} from 'react-native'


const { Surface, Shape, Path, Group } = ART;

export default class Line extends Component {
    render() {

        const linePath = Path().moveTo(1, 1).lineTo(300, 1);

        return (

            <View style={styles.container}>
                <Text>xxxxx</Text>
                <Text>xxxxx</Text>
                <Text>xxxxx</Text>
                <Text>xxxxx: {Date.now()}</Text>
                <Surface width={300} height={20} style={{ marginTop: 20 }}>
                    <Shape d={linePath} stroke='#000000' strokeWidth={2} />
                </Surface>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abc',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
