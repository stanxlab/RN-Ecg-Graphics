import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform } from 'react-native';
import Canvas from 'react-native-canvas';
import { random } from 'lodash';
import {getRandomColor} from '../util/colorUtil';

export default class EcgTest1 extends Component {
    handleCanvas = (canvas) => {
        let maxX = 300;
        let maxY = 400;
        let sideLen = 20; // 正方形边长
        canvas.width = maxX;
        canvas.height = maxY;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, sideLen, sideLen);
        ctx.fillRect(maxX - sideLen, maxY - sideLen, sideLen, sideLen);

        setInterval(() => {
            let x = random(0, maxX - sideLen);
            let y = random(0, maxY - sideLen);
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(x, y, sideLen, sideLen);
        }, 1000 / 60);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Current OS: {Platform.OS}</Text>
                <Canvas ref={this.handleCanvas} />
            </View>
        );
    }

}