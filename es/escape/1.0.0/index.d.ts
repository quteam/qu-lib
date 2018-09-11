/**
 * HTML 编码转换
 */
/**
 * HTML 解码
 * @param {string} _str 待解码字符串
 * @returns {string}
 */
declare function htmlUnescape(_str?: string): string;
/**
 * HTML 编码
 * @param _str
 */
declare function htmlEscape(_str?: string): string;
export { htmlEscape, htmlUnescape, };
