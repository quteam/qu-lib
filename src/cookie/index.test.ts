import cookie from './';

describe('测试 Cookie', () => {
    const cookieContent = `test=test123`;

    test('Cookie 写入', () => {
        cookie.set('test', 'test123', 1);
        expect(document.cookie).toEqual(cookieContent);
    });
    test('Cookie 读取', () => {
        expect(cookie.get('test')).toEqual('test123');
        expect(cookie.get('test_empty')).toEqual('');
    });
    test('Cookie 删除', () => {
        cookie.delete('test');
        // 真实情况 cookie 已过期，内容为空
        expect(document.cookie).toEqual(``);
    });
});
