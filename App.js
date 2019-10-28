import React from 'react';
import { StyleSheet, Text, View, WebView, Platform } from 'react-native';

import MyVebView from './src/rn/ecg/ecgWebView'; // -- 这里例子比较完整,嵌入webView
// import MyVebView from './src/rn/ecg/index';  // 直接使用rn绘制心电图

// import MyVebView from './src/rn/example'; // react-native-canvas示例

// import MyVebView from './src/rn/RandomRectDraw'; // 随机绘制正方形
// import MyVebView from './src/rn/AnimationFrameDraw'; // 网上绘制心电图的例子,转为rn
// import MyVebView from './src/web-view/View1'; // webView测试


export default MyVebView;