import {
    htmlEscape,
    htmlUnescape,
} from './';

describe('Html 编码', () => {
    const _str1 = `<script>alert("123")&nbsp;</script>`;
    const _str2 = `&lt;script&gt;alert(&quot;123&quot;)&amp;nbsp;&lt;/script&gt;`;
    it('Html 编码', () => {
        expect(htmlEscape(_str1)).toEqual(_str2);
    });
    it('Html 解码', () => {
        expect(htmlUnescape(_str2)).toEqual(_str1);
    });
    it('空数据', () => {
        expect(htmlEscape()).toEqual('');
        expect(htmlUnescape()).toEqual('');
    });
});
