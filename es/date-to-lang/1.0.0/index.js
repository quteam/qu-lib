/**
 * 时间转换友好的显示格式
 * 例子：21小时前
 * @param  {number} date 秒级时间戳
 * @return {string}
 */
export default function dateToLang(date) {
    let time = new Date().getTime();
    time = (time - date * 1000) / 1000;
    // 存储转换值
    let s;
    if (time < 60 * 10) { // 十分钟内
        return '刚刚';
    }
    else if ((time < 60 * 60) && (time >= 60 * 10)) {
        // 超过十分钟少于1小时
        s = Math.floor(time / 60);
        return `${s}分钟前`;
    }
    else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
        // 超过1小时少于24小时
        s = Math.floor(time / 60 / 60);
        return `${s}小时前`;
    }
    else if ((time < 60 * 60 * 24 * 7) && (time >= 60 * 60 * 24)) {
        // 超过1天少于7天内
        s = Math.floor(time / 60 / 60 / 24);
        return `${s}天前`;
    }
    else if ((time < 60 * 60 * 24 * 30) && (time >= 60 * 60 * 24 * 7)) {
        // 超过7天少于30天内
        s = Math.floor(time / 60 / 60 / 24 / 7);
        return `${s}周前`;
    }
    // 超过30天
    const _date = new Date(date * 1000);
    return `${_date.getFullYear()}年${_date.getMonth() + 1}月${_date.getDate()}日`;
}
