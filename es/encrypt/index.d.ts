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
export declare function encode(str: string, xor?: number, hex?: number): string;
/**
 * decode 解密程序
 * @param {strng} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数
 * @return {strng} 加密后的字符串
 */
export declare function decode(str: string, xor?: number, hex?: number): string;
