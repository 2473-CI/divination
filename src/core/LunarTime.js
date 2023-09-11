import { Lunar } from 'lunar-javascript'
import lunarGeneral from '../json/lunarGeneral.json'

export const LunarTime = (date) => {
    const lunar = Lunar.fromDate(date)
    const lunarTime = {}

    lunarTime.lunar = lunar

    lunarTime.year = {
        gan: lunar.getYearGan(),
        zhi: lunar.getYearZhi(),
        ganZhi: lunar.getYearInGanZhi(),
        shenXiao: lunar.getYearShengXiao()
    }

    lunarTime.month = {
        gan: lunar.getMonthGan(),
        zhi: lunar.getMonthZhi(),
        ganZhi: lunar.getMonthInGanZhi()
    }

    lunarTime.day = {
        gan: lunar.getDayGan(),
        zhi: lunar.getDayZhi(),
        ganZhi: lunar.getDayInGanZhi()
    }

    lunarTime.hour = {
        gan: lunar.getTimeGan(),
        zhi: lunar.getTimeZhi(),
        ganZhi: lunar.getTimeInGanZhi()
    }

    let jieQi = lunar.getCurrentQi() == null ? lunar.getPrevQi(true) : lunar.getCurrentQi()

    const monthGeneral = lunarGeneral.filter(month => month.qi === jieQi.getName())[0]

    lunarTime.jieQi = jieQi

    lunarTime.monthGeneral = {
        ... monthGeneral
    }

    return lunarTime
}