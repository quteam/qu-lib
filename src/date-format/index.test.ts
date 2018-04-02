import formatDate from './';

describe('测试日期格式化', () => {
    test('日期格式化', () => {
        expect(formatDate(1522637309)).toEqual('2018-04-02');
    });
    test('自定义日期格式化', () => {
        expect(formatDate(1522637309, 'MM/dd/yyyy HH:mm:ss')).toEqual('04/02/2018 10:48:29');
    });
    test('日期字符串格式化', () => {
        expect(formatDate('2018-04-02 10:48:50', 'MM/dd/yyyy HH:mm:ss')).toEqual('04/02/2018 10:48:50');
    });
    test('日期对象格式化', () => {
        expect(formatDate(new Date('2018-04-02 10:48:50'), 'MM/dd/yyyy HH:mm:ss')).toEqual('04/02/2018 10:48:50');
    });
    test('时间格式化', () => {
        expect(formatDate(1522637309, 'HH:mm')).toEqual('10:48');
    });
    test('时间格式化', () => {
        expect(formatDate(1522637309, 'HH:mm')).toEqual('10:48');
    });
    test('空时间', () => {
        expect(formatDate('')).toEqual('');
    });
});
