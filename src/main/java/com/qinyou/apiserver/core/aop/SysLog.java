package com.qinyou.apiserver.core.aop;

import java.lang.annotation.*;

/**
 * 系统日志注解
 * 系统日志
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface SysLog {
    String value() default "";   // 日志内容
    boolean logParams() default true; // 是否记录参数
    boolean logResult() default true; // 是否记录返回结果
    String type() default "";  // 日志类型
}