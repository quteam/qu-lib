import * as libs from './';

describe('导出模块', () => {
    it('正确的导出模块', () => {
        const moduleArr = [
            'cookie',
            'htmlEscape',
            'htmlUnescape',
            'dateToLang',
            'encode',
            'decode',
        ];
        expect(Object.keys(libs)).toEqual(moduleArr);
    });
});
