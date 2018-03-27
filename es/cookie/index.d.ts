/**
 * Cookie
 * Create cdhaowei1@jd.com  2018-01-29
 */
declare const Cookie: {
    set(name: string, value: string, days: number): void;
    get(name: string): string;
    delete(name: string): void;
};
export default Cookie;
