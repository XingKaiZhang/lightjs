# Date Overview #

    function Date() { [native code] }
        UTC: function UTC() { [native code] }
        arguments: null
        caller: null
        length: 7
        name: "Date"
        now: function now() { [native code] }
        parse: function parse() { [native code] }
        prototype: Invalid Date
            constructor: function Date() { [native code] }
            getDate: function getDate() { [native code] }
            getDay: function getDay() { [native code] }
            getFullYear: function getFullYear() { [native code] }
            getHours: function getHours() { [native code] }
            getMilliseconds: function getMilliseconds() { [native code] }
            getMinutes: function getMinutes() { [native code] }
            getMonth: function getMonth() { [native code] }
            getSeconds: function getSeconds() { [native code] }
            getTime: function getTime() { [native code] }
            getTimezoneOffset: function getTimezoneOffset() { [native code] }
            getUTCDate: function getUTCDate() { [native code] }
            getUTCDay: function getUTCDay() { [native code] }
            getUTCFullYear: function getUTCFullYear() { [native code] }
            getUTCHours: function getUTCHours() { [native code] }
            getUTCMilliseconds: function getUTCMilliseconds() { [native code] }
            getUTCMinutes: function getUTCMinutes() { [native code] }
            getUTCMonth: function getUTCMonth() { [native code] }
            getUTCSeconds: function getUTCSeconds() { [native code] }
            getYear: function getYear() { [native code] }
            setDate: function setDate() { [native code] }
            setFullYear: function setFullYear() { [native code] }
            setHours: function setHours() { [native code] }
            setMilliseconds: function setMilliseconds() { [native code] }
            setMinutes: function setMinutes() { [native code] }
            setMonth: function setMonth() { [native code] }
            setSeconds: function setSeconds() { [native code] }
            setTime: function setTime() { [native code] }
            setUTCDate: function setUTCDate() { [native code] }
            setUTCFullYear: function setUTCFullYear() { [native code] }
            setUTCHours: function setUTCHours() { [native code] }
            setUTCMilliseconds: function setUTCMilliseconds() { [native code] }
            setUTCMinutes: function setUTCMinutes() { [native code] }
            setUTCMonth: function setUTCMonth() { [native code] }
            setUTCSeconds: function setUTCSeconds() { [native code] }
            setYear: function setYear() { [native code] }
            toDateString: function toDateString() { [native code] }
            toGMTString: function toGMTString() { [native code] }
            toISOString: function toISOString() { [native code] }
            toJSON: function toJSON() { [native code] }
            toLocaleDateString: function () {
            toLocaleString: function () {
            toLocaleTimeString: function () {
            toString: function toString() { [native code] }
            toTimeString: function toTimeString() { [native code] }
            toUTCString: function toUTCString() { [native code] }
            valueOf: function valueOf() { [native code] }
            __proto__: Object
        __proto__: function Empty() {}

## Date ##

### new Date([parameters]) ###

    var dateObjectName = new Date([parameters]);

存储从 January 1, 1970, 00:00:00 到某个时间点的毫秒数.

Date对象的区间是 -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.

如果没有使用 `new` , 则返回值是提供日期的字符串表示.

    var date = Date();    // "Wed Sep 18 2013 13:46:40 GMT+0800 (中国标准时间)"

parameters 参数的值:

+ Nothing: creates today's date and time
+ "Month day, year hours:minutes:seconds" 格式的字符串, 比如 `var Xmas95 = new Date("December 25, 1995 13:30:00")`.
+ 代表年月日的数字参数, 比如 `var Xmas95 = new Date(1995, 11, 25)`.
+ 代表年月日时分秒的数字参数, 比如 `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0)`

### UTC ###

for parsing Date strings.

### parse ###

for parsing Date strings.

### now ###

## Date.prototype ##