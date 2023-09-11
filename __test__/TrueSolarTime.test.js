/* eslint-disable no-undef */
const { TrueSolarTime } = require('../src/index')
test('continents test', () => {
    const {continents} = TrueSolarTime
    console.log(continents)
})

test('allTimeZones test', () => {
    const {allTimeZones} = TrueSolarTime
    console.log(allTimeZones[0])
})

test('localTimeZone test', () => {
    const {localTimeZone} = TrueSolarTime
    console.log(localTimeZone)
})

test('now test', () => {
    const {now} = TrueSolarTime
    console.log(now)
    console.log(now.format())
    console.log(now.format("YYYY-MM-DD HH:mm:ss"))
})

test('getAreas test', () => {
    const {getAreas} = TrueSolarTime
    const areas = getAreas("南极洲")
    console.log(areas[0])
})

test('timeZoneTransition test', () => {
    const {timeZoneTransition} = TrueSolarTime
    const res = timeZoneTransition("Asia/Shanghai", "Antarctica/Casey", "2023-09-10 12:00:00")
    console.log(res)

    const formatter_res = timeZoneTransition("Africa/Abidjan", "Antarctica/Casey", "2023-09-10 12:00:00", "YYYY-MM-DD")
    console.log(formatter_res)
})

