/**
 * HTML 编码转换
 */

/**
 * 编码 Map
 */
interface EscapeMap {
    [key: string]: string;
}

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
    '&#x60;': '\'',
    '&#39;': '\'',
};

// 解密 map
const unescapeMap2: EscapeMap = invert(unescapeMap);

/**
 * HTML 解码
 * @param {string} _str 待解码字符串
 * @returns {string}
 */
function htmlUnescape(_str: string = ''): string {
    function escaper(match: string) {
        return unescapeMap[match];
    }

    const source = `(?:${Object.keys(unescapeMap).join('|')})`;
    const replaceRegexp = RegExp(source, 'g');
    return _str.replace(replaceRegexp, escaper);
}

/**
 * HTML 编码
 * @param _str
 */
function htmlEscape(_str: string = ''): string {
    function escaper(match: string) {
        return unescapeMap2[match];
    }

    const source = `(?:${Object.keys(unescapeMap2).join('|')})`;
    const replaceRegexp = RegExp(source, 'g');
    return _str.replace(replaceRegexp, escaper);
}

export {
    htmlEscape,
    htmlUnescape,
};
