/**
 * Created by stefan on 20.8.20..
 */
var nonWorkingDays = {
    2020: {
        0:3, //jan
        1:1, //feb
        2:0, //mar
        3:2, //apr
        4:1, //maj
        5:0, //jun
        6:0, //jul
        7:0, //avg
        8:0, //sep
        9:0, //okt
        10:1, //nov
        11:0, //dec
    }
};

const months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];

export const locale = {
    localize: {
        month: n => months[n]
    },
    formatLong: {}
};

export const numOfNonWorkingDays = (date) => {
    return nonWorkingDays[date.getFullYear()] ? nonWorkingDays[date.getFullYear()][date.getMonth()] : -1;
};