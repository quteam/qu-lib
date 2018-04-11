/*
 * @Author: haovei@gmail.com
 * @Date: 2018-03-30 17:47:39
 * @Last Modified by: haovei@gmail.com
 * @Last Modified time: 2018-03-30 18:25:18
 */
/**
 * 格式化价格
 * Exp: 1233 => 1,233.00
 * @param {number} money 需要转换的数目
 * @param {number} size 小数位数，默认小数点后 2 位
 * @return {strng} 格式化后的价格
 */
function price(money, size) {
    if (money === void 0) { money = 0; }
    if (size === void 0) { size = 2; }
    var tpMoney = '';
    if (!money || typeof money !== 'number') {
        return (0).toFixed(size);
    }
    tpMoney = money.toFixed(size);
    var re = /^(-?\d+)(\d{3})(\.?\d*)/;
    while (re.test(tpMoney)) {
        tpMoney = tpMoney.replace(re, '$1,$2$3');
    }
    return tpMoney;
}
export default price;
