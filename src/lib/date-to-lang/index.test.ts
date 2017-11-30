import dateToLang from './';

test('时间转自然语言', () => {
    // 模拟一个时间
    const _nowTime = Math.round(Date.now() / 1000) - 10;
    expect(dateToLang(_nowTime - 60 * 9)).toEqual('刚刚');
    expect(dateToLang(_nowTime - 60 * 58)).toEqual('58分钟前');
    expect(dateToLang(_nowTime - 60 * 60 * 21)).toEqual('21小时前');
    expect(dateToLang(_nowTime - 60 * 60 * 24 * 5)).toEqual('5天前');
    expect(dateToLang(_nowTime - 60 * 60 * 24 * 25)).toEqual('3周前');
    expect(dateToLang(1486684800)).toEqual('2017年2月10日');
});
