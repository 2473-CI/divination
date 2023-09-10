# 计算数组平均值
计算平均值的方式很多，计算的逻辑都是一样的， 但是实现方式各不相同，一行代码简单实现：

```js
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
average([1,9,18,36]) //16
```
