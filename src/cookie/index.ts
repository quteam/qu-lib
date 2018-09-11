/**
 * Cookie
 * Create haovei@gmail.com  2018-01-29
 */
const Cookie = {
    /**
     * 设置 Cookie
     * @param name 名称
     * @param value 值
     * @param days 有效期(天)，空为 session
     */
    set(name: string, value: string, days: number): void {
        const d = new Date();
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000 * days));
        window.document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
    },
    /**
     * 获取 Cookie
     * @param name 名称
     */
    get(name: string): string {
        const v = window.document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return v ? v[2] : '';
    },
    /**
     * 删除 Cookie
     * @param name 名称
     */
    delete(name: string): void {
        this.set(name, '', -1);
    },
};

export default Cookie;
