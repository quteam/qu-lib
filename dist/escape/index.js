"use strict";
/**
 * HTML 编码转换
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
/**
 * HTML 解码
 * @param _str 待解码字符串
 * @param _map
 */
function htmlUnescape(_str, _map) {
    if (_str === void 0) { _str = ''; }
    if (_map === void 0) { _map = unescapeMap; }
    function escaper(match) {
        return _map[match];
    }
    var source = "(?:" + Object.keys(_map).join('|') + ")";
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
    return htmlUnescape(_str, invert(unescapeMap));
}
exports.htmlEscape = htmlEscape;
