import {
    encode,
    decode,
} from './';

describe('简单的字符串加解密', () => {
    const _str1 = `abce123`;
    const _str2 = `dkzdlzdmzdozafzagzah`;
    const _str3 = `161q162q163q165q131q132q133`;
    it('正常加密', () => {
        expect(encode(_str1)).toEqual(_str2);
    })
    it('正常解密', () => {
        expect(decode(_str2)).toEqual(_str1);
    })
    it('自定义加密', () => {
        expect(encode(_str1, 256, 41)).toEqual(_str3);
    })
    it('自定义解密', () => {
        expect(decode(_str3, 256, 41)).toEqual(_str1);
    })
    it('空字符', () => {
        expect(encode('')).toEqual('');
    })
    it('特殊类型', () => {
        expect(encode(0)).toEqual('');
        expect(decode(0)).toEqual('');
    })
});