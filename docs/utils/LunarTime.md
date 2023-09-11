# 阴历 | LunarTime

## 引入方式
```js
import { LunarTime } from 'divination-liurent';
```

## 实例化
```js
const lunarTime = LunarTime(new Date())
```

## 获取年
```js
console.log(lunarTime.year) // 年
```
返回结果
> { gan: '癸', zhi: '卯', ganZhi: '癸卯', shenXiao: '兔' }

## 获取月
```js
console.log(lunarTime.month) // 月
```
返回结果
> { gan: '辛', zhi: '酉', ganZhi: '辛酉' }

## 获取日
```js
console.log(lunarTime.day) // 日
```
返回结果
> { gan: '壬', zhi: '申', ganZhi: '壬申' }

## 获取时辰
```js
console.log(lunarTime.hour) // 时辰
```
返回结果
> { gan: '戊', zhi: '申', ganZhi: '戊申' }


## 获取将
```js
console.log(lunarTime.monthGeneral) // 月将
```
返回结果
> { qi: '处暑', gan: '巳', name: '太乙', basis: '七月处暑后月将为巳，名太乙' }