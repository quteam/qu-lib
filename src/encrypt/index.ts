/**
 * 简单的字符串加解密
 */

/**
 * encode 加密程序
 * @param {strng} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数
 * @return {strng} 加密后的字符串
 */
export function encode(str: string, xor = 312, hex = 25): string {
    if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return '';
    }

    const resultList = [];
    hex = hex <= 25 ? hex : hex % 25;

    for (let i = 0; i < str.length; i++) {
        // 提取字符串每个字符的ascll码
        let charCode = str.charCodeAt(i);
        // 进行异或加密
        // tslint:disable-next-line:no-bitwise
        charCode = (charCode * 1) ^ xor;
        // 异或加密后的字符转成 hex 位数的字符串
        resultList.push(charCode.toString(hex));
    }

    const splitStr = String.fromCharCode(hex + 97);
    const resultStr = resultList.join(splitStr);
    return resultStr;
}

/**
 * decode 解密程序
 * @param {strng} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数
 * @return {strng} 加密后的字符串
 */
export function decode(str: string, xor = 312, hex = 25): string {
    if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return '';
    }
    let strCharList = [];
    const resultList = [];
    hex = hex <= 25 ? hex : hex % 25;
    // 解析出分割字符
    const splitStr = String.fromCharCode(hex + 97);
    // 分割出加密字符串的加密后的每个字符
    strCharList = str.split(splitStr);

    for (let i = 0; i < strCharList.length; i++) {
        // 将加密后的每个字符转成加密后的ascll码
        let charCode = parseInt(strCharList[i], hex);
        // 异或解密出原字符的ascll码
        // tslint:disable-next-line:no-bitwise
        charCode = (charCode * 1) ^ xor;
        const strChar = String.fromCharCode(charCode);
        resultList.push(strChar);
    }
    const resultStr = resultList.join('');
    return resultStr;
}
