/*
 * @Author: haovei@gmail.com
 * @Date: 2018-03-30 17:53:31
 * @Last Modified by: haovei@gmail.com
 * @Last Modified time: 2018-03-30 18:01:11
 */
import {
    maxNum,
    price,
} from './';

describe('数字格式化', () => {
    it('正常导入', () => {
        expect(price(12345678)).toEqual('12,345,678.00');
        expect(maxNum(123)).toEqual('99+');
    });
});
