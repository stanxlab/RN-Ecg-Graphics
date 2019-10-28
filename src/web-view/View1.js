import React, { Component }  from 'react';
import { Platform, View, WebView } from 'react-native';
// const PolicyHTML = require('../html-canvas/test3.html');
// const {LocalHtml} = require('../html-canvas/tmp.html');

// 备注: 外层不能套 view
export default class App extends Component {
    render() {
      return (
          <WebView
            style={{ width: "100%", height: "100%" }}
            originWhitelist={["*"]}
            source={{ html: require('./foo.js')() }}
            // source={{ uri:"http://www.baidu.com/" }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            useWebKit={true}
            startInLoadingState={true}
          />
      );
    }
  }