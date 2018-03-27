"use strict";
/**
 * 简单的字符串加解密
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * encode 加密程序
 * @param {strng} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数
 * @return {strng} 加密后的字符串
 */
function encode(str, xor, hex) {
    if (xor === void 0) { xor = 312; }
    if (hex === void 0) { hex = 25; }
    if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return '';
    }
    var resultList = [];
    hex = hex <= 25 ? hex : hex % 25;
    for (var i = 0; i < str.length; i++) {
        // 提取字符串每个字符的ascll码
        var charCode = str.charCodeAt(i);
        // 进行异或加密
        charCode = (charCode * 1) ^ xor;
        // 异或加密后的字符转成 hex 位数的字符串
        resultList.push(charCode.toString(hex));
    }
    var splitStr = String.fromCharCode(hex + 97);
    var resultStr = resultList.join(splitStr);
    return resultStr;
}
exports.encode = encode;
/**
 * decode 解密程序
 * @param {strng} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数
 * @return {strng} 加密后的字符串
 */
function decode(str, xor, hex) {
    if (xor === void 0) { xor = 312; }
    if (hex === void 0) { hex = 25; }
    if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return '';
    }
    var strCharList = [];
    var resultList = [];
    hex = hex <= 25 ? hex : hex % 25;
    // 解析出分割字符
    var splitStr = String.fromCharCode(hex + 97);
    // 分割出加密字符串的加密后的每个字符
    strCharList = str.split(splitStr);
    for (var i = 0; i < strCharList.length; i++) {
        // 将加密后的每个字符转成加密后的ascll码
        var charCode = parseInt(strCharList[i], hex);
        // 异或解密出原字符的ascll码
        charCode = (charCode * 1) ^ xor;
        var strChar = String.fromCharCode(charCode);
        resultList.push(strChar);
    }
    var resultStr = resultList.join('');
    return resultStr;
}
exports.decode = decode;
