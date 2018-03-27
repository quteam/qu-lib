"use strict";
/**
 * HTML 编码转换
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 反转 Map 对象
 * @param obj
 */
function invert(obj) {
    var result = {};
    var keys = Object.keys(obj);
    Object.keys(obj).map(function (one) {
        result[obj[one]] = one;
    });
    return result;
}
var unescapeMap = {
    '&#38;': '&',
    '&amp;': '&',
    '&#60;': '<',
    '&lt;': '<',
    '&#62;': '>',
    '&gt;': '>',
    '&#34;': '"',
    '&quot;': '"',
    '&#x27;': '\'',
    '&#x60;': '\'',
    '&#39;': '\'',
};
// 解密 map
var unescapeMap2 = invert(unescapeMap);
/**
 * HTML 解码
 * @param {string} _str 待解码字符串
 * @returns {string}
 */
function htmlUnescape(_str) {
    if (_str === void 0) { _str = ''; }
    function escaper(match) {
        return unescapeMap[match];
    }
    var source = "(?:" + Object.keys(unescapeMap).join('|') + ")";
    var replaceRegexp = RegExp(source, 'g');
    return _str.replace(replaceRegexp, escaper);
}
exports.htmlUnescape = htmlUnescape;
/**
 * HTML 编码
 * @param _str
 */
function htmlEscape(_str) {
    if (_str === void 0) { _str = ''; }
    function escaper(match) {
        return unescapeMap2[match];
    }
    var source = "(?:" + Object.keys(unescapeMap2).join('|') + ")";
    var replaceRegexp = RegExp(source, 'g');
    return _str.replace(replaceRegexp, escaper);
}
exports.htmlEscape = htmlEscape;
