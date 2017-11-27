/**
 * HTML 解码
 * @param _str 待解码字符串
 * @param _map
 */
declare function htmlUnescape(_str?: string, _map?: any): string;
/**
 * HTML 编码
 * @param _str
 */
declare function htmlEscape(_str?: string): string;
export { htmlEscape, htmlUnescape };
