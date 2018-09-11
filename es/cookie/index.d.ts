/**
 * Cookie
 * Create haovei@gmail.com  2018-01-29
 */
declare const Cookie: {
    /**
     * 设置 Cookie
     * @param name 名称
     * @param value 值
     * @param days 有效期(天)，空为 session
     */
    set(name: string, value: string, days: number): void;
    /**
     * 获取 Cookie
     * @param name 名称
     */
    get(name: string): string;
    /**
     * 删除 Cookie
     * @param name 名称
     */
    delete(name: string): void;
};
export default Cookie;
