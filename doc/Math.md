# Math Overview #

    MathConstructor
        // Math四舍五入类函数
        abs: function abs() { [native code] }        // 取绝对值
        ceil: function ceil() { [native code] }      // 返回大于等于数字参数的最小整数(取整函数)，对数字进行上舍入
        floor: function floor() { [native code] }    // 返回小于等于数字参数的最大整数，对数字进行下舍入
        round: function round() { [native code] }    // 返回数字最接近的整数，四舍五入

        // Math随机数函数
        random: function random() { [native code] }  // 返回一个 0 和 1 之间的数
        
        // Math最大最小类函数
        max: function max() { [native code] }        // 返回数个数字中较大的值
        min: function min() { [native code] }        // 返回数个数字中较小的值
        
        // Math幂指类函数
        pow: function pow() { [native code] }        // 幂运算, 返回底数的指定次幂
        sqrt: function sqrt() { [native code] }      // 取平方根
        SQRT1_2: 0.7071067811865476                  // 0.5的平方根，或2的平方根除1
        SQRT2: 1.4142135623730951                    // 2的平方根
        
        // Math自然对数相关函数与属性
        exp: function exp() { [native code] }        // 返回E(自然对数的底数)的x次幂(指数)
        log: function log() { [native code] }        // 返回数字的自然对数
        E: 2.718281828459045                         // 自然对数的底数
        LN2: 0.6931471805599453                      // 2的自然对数loge2
        LN10: 2.302585092994046                      // 0的自然对数loge2
        LOG2E: 1.4426950408889634                    // 以2为底的E的对数log2e
        LOG10E: 0.4342944819032518                   // 以10为底的E的对数log10e

        // Math三角函数与属性
        sin: function sin() { [native code] }        // 返回数字的正弦值
        cos: function cos() { [native code] }        // 返回数字的余弦值
        tan: function tan() { [native code] }        // 返回数字的正切值
        asin: function asin() { [native code] }      // 返回数字的反正弦值
        acos: function acos() { [native code] }      // 返回数字的反余弦值
        atan: function atan() { [native code] }      // 返回数字的反正切值
        atan2: function atan2() { [native code] }    // 返回由x轴到点(x,y)的角度(以弧度为单位)
        PI: 3.141592653589793                        // 圆的周长与其直径的比值(圆周率π)

        imul: function imul() { [native code] }      // 该函数返回两个参数的类C的32位整数乘法运算的运算结果.

        __proto__: Object

Math 对象没有构造函数, 是一个固有的对象.
Math 对象提供针对数学常量和函数的一些属性和方法, 其中方法包括三角函数, 对数, 指数和其他功能.

请注意，所有三角函数的数学方法接受弧度参数.