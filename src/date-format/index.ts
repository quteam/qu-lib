/*
 * @Author: haovei@gmail.com
 * @Date: 2018-04-02 10:35:34
 * @Last Modified by: haovei@gmail.com
 * @Last Modified time: 2018-04-02 11:02:43
 */

/**
 * 字符串补位
 * Exp: 12 => 0012
 * @param value 待补位
 * @param length 最小补位长度
 * @param char 部位所用字符
 */
function padStart(value: string, length: number = 2, char: string = '0'): string {
    value += '';
    const len = length - value.length;
    if (len <= 0) {
        return value;
    }
    return Array(len + 1).join(char) + value;
}

/**
 * 格式化日期(秒级)
 * Exp: 1522637309 => 2018-04-02
 * @param date 时间对象/时间戳/时间字符串
 * @param format 格式规则
 * @return {strng} 格式化后的时间
 */
function formatDate(date: any, format = 'yyyy-MM-dd'): string {
    let _date = date;
    const splitArr = format.split(/(yyyy|MM|dd|HH|mm|ss)+/);

    if (!_date) {
        return '';
    }

    if (typeof _date !== 'object') {
        if (typeof _date === 'string') {
            _date = (`${_date}`).replace(/-/g, '/');
            _date = new Date(_date);
        } else {
            _date = new Date(_date * 1000);
        }
    }

    return splitArr.map(item => {
        if (item === 'yyyy') {
            return _date.getFullYear();
        }
        if (item === 'MM') {
            return padStart(_date.getMonth() + 1);
        }
        if (item === 'dd') {
            return padStart(_date.getDate());
        }
        if (item === 'HH') {
            return padStart(_date.getHours());
        }
        if (item === 'mm') {
            return padStart(_date.getMinutes());
        }
        if (item === 'ss') {
            return padStart(_date.getSeconds(), 2, '0');
        }
        return item;
    }).join('');
}

export default formatDate;
