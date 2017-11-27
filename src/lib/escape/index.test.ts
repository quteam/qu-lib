import {
    htmlEscape,
    htmlUnescape,
} from './';

test('Html 编码解码', () => {
    const _str1 = `<script>alert("123")&nbsp;</script>`;
    const _str2 = `&lt;script&gt;alert(&quot;123&quot;)&amp;nbsp;&lt;/script&gt;`;
    expect(htmlEscape(_str1)).toEqual(_str2);
    expect(htmlUnescape(_str2)).toEqual(_str1);
});
