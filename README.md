# React Native VLog

经验记录

## 1. Style

### 目标

- 新建app项目，style部分可以直接沿用

### 原则

- 易读

- 易用：复用，易扩展和修改

- 简短：多用可识别的缩写

- 不要太特别

- 尽量少用第三方库，如tailwind, 可能考虑stylex

- 各个组件中尽量少用自己的style定义，少写inline的css, 防止风格不一致

### 技术要求

- Theme, dark | light

- 全局状态

### 代码规范

- 非JSX组件函数文件都以小写开头

- JSX组件函数以大写开头

- 纯常量全大写

- 可能变动的常量大写开头驼峰

# tips

## cache

```
yarn start --reset-cache
```