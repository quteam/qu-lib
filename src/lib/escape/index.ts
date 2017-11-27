/**
 * HTML 编码转换
 */

/**
 * 编码 Map
 */
interface EscapeMap {
    [key: string]: string;
}

const unescapeMap: EscapeMap = {
    '&#38;': '&',
    '&amp;': '&',
    '&#60;': '<',
    '&lt;': '<',
    '&#62;': '>',
    '&gt;': '>',
    '&#34;': '"',
    '&quot;': '"',
    '&#x27;': '\'',
    '&apos;': '\'',
    '&#x60;': '\'',
    '&#39;': '\'',
};

/**
 * 反转 Map 对象
 * @param obj
 */
function invert(obj: EscapeMap): EscapeMap {
    const result: EscapeMap = {};
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
function htmlUnescape(_str = '', _map: any = unescapeMap): string {
    function escaper(match: string) {
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
function htmlEscape(_str = ''): string {
    return htmlUnescape(_str, invert(unescapeMap));
}

export {
    htmlEscape,
    htmlUnescape,
};
