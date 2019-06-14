# cr-easeshow

react component

## Example
<img src="./github/easeshow2.gif" width="800px" alt="example" />

## Usage

```jsx
cnpm install --save cr-easeshow
```

```js
import EaseShow from 'cr-easeshow'
import 'cr-easeshow/assets/index.css'
// 注意在使用的时候不能忘记引入css
<div style={{height: 600, border: '1px solid #21c8be'}}>
  <EaseShow minScale={0.5} maxScale={2}>
    <div style={{fontSize: 200, color: '#e850e6'}}>HELLO WORLD</div>
  </EaseShow>
</div>
```

## 注意
如果使用了cssModule，作为样式的使用方式，在引入css时应特别注意
以And Design Pro使用为例，在对应的页面less中引入css。注意包名前面的波浪线
```less
@import '~cr-easeshow/assets/index.css';
```
## API
name | type | description
-----|------|------------
minScale|number|缩小的最小倍数
maxScale|number|放大的最大倍数
bgColor|string|拖动放大缩小画布的背景颜色
scale|number|组件可以按照外部值放大缩小
isMove|bool|组件是否可以拖动`true`可以拖动
isScale|bool|组件是否可以缩放`true`可以缩放

## Development

```
cnpm install
npm start
```

## Example

http://localhost:8021/examples/testOne.html


## License

cr-easeshow is released under the MIT license.
