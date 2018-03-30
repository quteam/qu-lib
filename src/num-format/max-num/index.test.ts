/*
 * @Author: haovei@gmail.com
 * @Date: 2018-03-30 17:53:24
 * @Last Modified by: haovei@gmail.com
 * @Last Modified time: 2018-03-30 17:53:24
 */
import maxNum from './';

describe('最大数目显示', () => {
    it('默认属性', () => {
        expect(maxNum(12)).toEqual('12');
    });
    it('默认属性2', () => {
        expect(maxNum(123)).toEqual('99+');
    });
    it('小于位数', () => {
        expect(maxNum(123, 3)).toEqual('123');
    });
    it('大于位数', () => {
        expect(maxNum(1234, 3)).toEqual('999+');
    });
});
