# 真太阳时 | TrueSolarTime

## 引入方式
```js
import { TrueSolarTime } from 'divination-liurent';
```

## 属性
### 各大洲列表
```js
const {continents} = TrueSolarTime
console.log(continents)
```
返回结果
> [
'大洋洲', '美洲',
'欧洲',   '亚洲',
'大西洋', '南极洲',
'太平洋', '北冰洋',
'非洲'
]
 
### 所有时区集合
```js
const {allTimeZones} = TrueSolarTime
console.log(allTimeZones)
```
返回结果
> [{ en: 'Africa/Abidjan', zh: '非洲/阿比让', continent: '非洲', area: '阿比让' }, ...]


### 本地时区
```js
const {localTimeZone} = TrueSolarTime
console.log(localTimeZone)
```
返回结果
> Asia/Shanghai
 
### 本地时间
```js
const {now} = TrueSolarTime
console.log(now)
console.log(now.format())
```
返回结果
> Moment<2023-09-11T11:05:05+08:00>
> 
> 2023-09-11T11:06:17+08:00
> 
> 2023-09-11 11:08:44