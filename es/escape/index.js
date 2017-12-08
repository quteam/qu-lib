/**
 * HTML 编码转换
 */
const unescapeMap = {
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
    const result = {};
    const keys = Object.keys(obj);
    Object.keys(obj).map(one => {
        result[obj[one]] = one;
    });
    return result;
}
/**
 * HTML 解码
 * @param _str 待解码字符串
 * @param _map
 */
function htmlUnescape(_str = '', _map = unescapeMap) {
    function escaper(match) {
        return _map[match];
    }
    const source = `(?:${Object.keys(_map).join('|')})`;
    const replaceRegexp = RegExp(source, 'g');
    return _str.replace(replaceRegexp, escaper);
}
/**
 * HTML 编码
 * @param _str
 */
function htmlEscape(_str = '') {
    return htmlUnescape(_str, invert(unescapeMap));
}
export { htmlEscape, htmlUnescape, };
