"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function maxNum(num, size) {
    if (size === void 0) { size = 2; }
    var _maxNum = Math.pow(10, size);
    var _string = '';
    if (num > _maxNum) {
        _string = _maxNum - 1 + "+";
    }
    else {
        _string = num.toString();
    }
    return _string;
}
exports.default = maxNum;
