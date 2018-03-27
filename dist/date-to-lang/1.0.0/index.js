"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 时间转换友好的显示格式
 * 例子：21小时前
 * @param  {number} date 秒级时间戳
 * @return {string}
 */
function dateToLang(date) {
    var time = new Date().getTime();
    time = (time - date * 1000) / 1000;
    // 存储转换值
    var s;
    if (time < 60 * 10) {
        return '刚刚';
    }
    else if ((time < 60 * 60) && (time >= 60 * 10)) {
        // 超过十分钟少于1小时
        s = Math.floor(time / 60);
        return s + "\u5206\u949F\u524D";
    }
    else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
        // 超过1小时少于24小时
        s = Math.floor(time / 60 / 60);
        return s + "\u5C0F\u65F6\u524D";
    }
    else if ((time < 60 * 60 * 24 * 7) && (time >= 60 * 60 * 24)) {
        // 超过1天少于7天内
        s = Math.floor(time / 60 / 60 / 24);
        return s + "\u5929\u524D";
    }
    else if ((time < 60 * 60 * 24 * 30) && (time >= 60 * 60 * 24 * 7)) {
        // 超过7天少于30天内
        s = Math.floor(time / 60 / 60 / 24 / 7);
        return s + "\u5468\u524D";
    }
    // 超过30天
    var _date = new Date(date * 1000);
    return _date.getFullYear() + "\u5E74" + (_date.getMonth() + 1) + "\u6708" + _date.getDate() + "\u65E5";
}
exports.default = dateToLang;
