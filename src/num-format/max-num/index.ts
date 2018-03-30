/*
 * @Author: haovei@gmail.com
 * @Date: 2018-03-30 17:47:46
 * @Last Modified by: haovei@gmail.com
 * @Last Modified time: 2018-03-30 17:48:07
 */
/**
 * 最大数目显示
 * Exp:  1233 => 99+
 * @param {number} num 需要转换的数目
 * @param {number} size 位数，默认 2 位
 * @return {strng} 返回限制的数目
 */
function maxNum(num: number, size = 2): string {
    const _maxNum = Math.pow(10, size);
    let _string = '';
    if (num > _maxNum) {
        _string = `${_maxNum - 1}+`;
    } else {
        _string = num.toString();
    }
    return _string;
}

export default maxNum;
