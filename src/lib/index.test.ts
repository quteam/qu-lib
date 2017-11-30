import * as libs from './';

test('正确的导出模块', () => {
    expect(Object.keys(libs)).toMatchSnapshot();
});
