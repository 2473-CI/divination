import allTimeZones from '../json/allTimezones.json'
import moment from 'moment-timezone'

const getAreas = (continent) => {
    if (continent === undefined) {
        return allTimeZones
    }
    return allTimeZones.filter(tz => tz.continent === continent)
}

const timeZoneTransition = (from, to, timeStr, format = 'YYYY-MM-DD HH:mm:ss') => {
    // 定义一个日期和时间以及其时区
    const originalTime = moment.tz(timeStr, from);
    // 将时间转换为另一个时区
    const targetTime = originalTime.clone().tz(to);
    return targetTime.format(format);
}

export const TrueSolarTime = {
    continents: ['大洋洲', '美洲', '欧洲', '亚洲', '大西洋', '南极洲', '太平洋', '北冰洋', '非洲'],
    allTimeZones: allTimeZones,
    localTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    now: moment(),
    getAreas: getAreas,
    timeZoneTransition: timeZoneTransition
}