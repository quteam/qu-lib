/*
 * @Author: haovei@gmail.com
 * @Date: 2018-03-30 17:53:29
 * @Last Modified by: haovei@gmail.com
 * @Last Modified time: 2018-03-30 18:22:49
 */
import price from './';

describe('价格格式化', () => {
    it('小于千位数', () => {
        expect(price(12)).toEqual('12.00');
    });
    it('大于千位数', () => {
        expect(price(12345678)).toEqual('12,345,678.00');
    });
    it('没有小数', () => {
        expect(price(12345678, 0)).toEqual('12,345,678');
    });
    it('空值', () => {
        expect(price()).toEqual('0.00');
    });
    it('空值2', () => {
        expect(price(null)).toEqual('0.00');
    });
    it('非法字符', () => {
        expect(price('abc')).toEqual('0.00');
    });
});
