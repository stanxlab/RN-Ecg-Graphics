import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, WebView, Platform } from 'react-native';
import Canvas from 'react-native-canvas';

import Electrocardiogram from './tutelageEcg';
import { random } from 'lodash';
import { getRandomColor } from '../../util/colorUtil';

function makeEcgData() {
    var arr = [];
    for (var i = 0; i < 200; i++) {
        arr.push({ v: random(-220, 100) });
    }
    return arr;
}
var i = 0;

export default class EcgTest1 extends Component {
    handleCanvas = (canvas) => {
        let maxX = 350;
        let maxY = 200;
        let sideLen = 10; // 正方形边长
        canvas.width = maxX;
        canvas.height = maxY;

        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        this.$graphics = ctx;

        // 画出两个端点
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, sideLen, sideLen);
        ctx.fillRect(maxX - sideLen, maxY - sideLen, sideLen, sideLen);

        this.testLog();
    }

    testLog() {
        var ecg = new Electrocardiogram(this.canvas, {
            // width: 350,
            // height: 200
        });
        this.ecg = ecg;
        ecg.drawGrid();

        let oriData = makeEcgData();
        let drawData = ecg.getDrawingDatas(oriData);
        // console.log(oriData.length, drawData.length, "[drawData]=", JSON.stringify(drawData));
        ecg.drawCurveByValue(drawData);

        setInterval(() => {
            ecg.drawCurveByValue(ecg.getDrawingDatas(makeEcgData()));

            // this._drawGridRandom();
            console.log(i++);
        }, 1000);
    }

    _drawGridRandom() {
        // test
        let bgColor = getRandomColor();
        let gridColor = null; //getRandomColor();
        this.ecg.drawGrid(bgColor, gridColor);
    }

    drawLine(x1, y1, x2, y2) {
        this.$graphics.moveTo(x1, y1);
        this.$graphics.lineTo(x2, y2);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: "red" }}>[Ecg] Current OS: {Platform.OS}</Text>
                <Canvas ref={this.handleCanvas} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
