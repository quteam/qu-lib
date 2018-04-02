/**
 * 格式化日期(秒级)
 * Exp: 1522637309 => 2018-04-02
 * @param date 时间对象/时间戳/时间字符串
 * @param format 格式规则
 * @return {strng} 格式化后的时间
 */
declare function formatDate(date: any, format?: string): string;
export default formatDate;
