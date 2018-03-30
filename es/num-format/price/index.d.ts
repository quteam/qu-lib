/**
 * 格式化价格
 * Exp: 1233 => 1,233.00
 * @param {number} money 需要转换的数目
 * @param {number} size 小数位数，默认小数点后 2 位
 * @return {strng} 格式化后的价格
 */
declare function price(money?: number, size?: number): string;
export default price;
