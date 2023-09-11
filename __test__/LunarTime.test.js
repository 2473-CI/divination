/* eslint-disable no-undef */
const { LunarTime } = require('../src/index')

test('init test', () => {
    const lunarTime = LunarTime(new Date())
    console.log(lunarTime.year) // 年
    console.log(lunarTime.month) // 月
    console.log(lunarTime.day) // 日
    console.log(lunarTime.hour) // 时
    console.log(lunarTime.monthGeneral) // 月将
})