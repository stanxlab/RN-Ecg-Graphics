# RN 下面画心电图

## 直接使用RN
- 似乎存在性能问题
  @`./src/rn/ecg/index.js`


## RN 嵌入WebView,使用html绘制
@`./src/rn/ecg/ecgWebView.js`


## html的例子
@`./src/rn/ecg/test.html`


## 问题
- android 引入本地html文件的方式问题
  - 通过`scoure={require('./src/tmp.html')}` 测试不行, ~~ios可以用这个方式,待测试~~
  - `source={{ uri:"http://www.baidu.com/" }}` 可以
  - `source={{ html: require('./foo.js')() }}` 可以,其中js返回的是html文本

  