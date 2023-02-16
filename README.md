# 王者荣耀图鉴

## 前言

> 因兴趣开发此项目，与同行一起交流与学习，顺便展示自己的能力，并无实际用途
>
> 但也可用于游戏玩家获取一些比较感兴趣皮肤排名和筛选
>
> 如英雄性别筛选、身高排名、皮肤数量排名等
>
> 以及技能属性筛选，如无位移、无蓝条、无控制、自带免控的英雄等

## 技术栈

> [Vue3](https://cn.vuejs.org)、[Typescript](https://www.tslang.cn/index.html)、[Vite4](https://vitejs.cn)、[Pinia2](https://pinia.vuejs.org)、[Vue-Router4](https://router.vuejs.org/zh)、[Axios](https://www.axios-http.cn)、[Less](https://less.bootcss.com)

## 第三方依赖

> 事件总线[Mitt](https://github.com/developit/mitt)、富文本编辑器[wangEditor](https://www.wangeditor.com)、手机端调试工具[vconsole](https://github.com/Tencent/vConsole)

## 素材来源

> 游戏图片素材和语音音效从`王者荣耀`官网获取，一些素材如装备、技能图标使用了`AI修复`，所以比原版更清晰
>
> 部分素材从游戏中截图、抠图获取
>
> 部分音效通过在游戏内录制点击音效进行截取
>
> 像英雄列表中的封面只存在于游戏中，无法获取，只能对`100`多个英雄的海报进行裁剪来获取封面
>
> 游戏官网中的技能信息过于简陋和老旧，为了保证信息质量，选择在游戏中通过对每个英雄的详情页进行截图、识字，再通过富文本编辑器对关键文字的设置颜色
>
> 一些英雄信息如阵营、身高、身份、种族等数据也是通过手敲，并整合所有类型
>
> 在这类文字信息获取上，耗费了大量时间

## 项目介绍

> 此项目无数据库，无后端参与，一切数据存储于`json`文件中，将`json`文件托管至服务器，只存在文件的`get`请求
>
> 注册、登录、设置、用户信息等数据都存在于`localStorage`，只能在当前浏览器使用
>
> 项目并未使用第三方组件库，难以对第三方组件的样式及功能自定义
>
>
>
> 过程：项目经历过从`Vue2 + Cli`升级为`Vue3 + TS + Vite`，删除了`Vue2`时期的`Git历史`，也在当时，将项目的所有图片采用图床展示，使项目大小从原来的超过`40MB`降至不足`4MB`，减轻下载项目的压力。
>

## 数据下载

> 用户：空数据
>
> 英雄：基础数据，头像，信息，技能列表，技能类型，技能效果，皮肤，皮肤类型，关系
>
> 信息：职业，定位，特长，时期，阵营，种族
>
> 杂项：装备，装备合成表，装备类型，装备效果，铭文，铭文类型，铭文效果

## 主要功能

### 动态路由

> 1、当用户登录后，通过判断用户权限，获取该权限的路由表，再将其转换为真实的路由，通过`addRoute`循环添加路由，并存储路由`name`组
> 2、当用户退出后，循环`name`组，调用`removeRoute`删除路由

### 路由权限

> 1、未登录状态访问需要登录的路由，跳转`/403`，提示需要登录访问
>
> 2、未登录状态访问不存在的路由，跳转`/404`，提示访问了不存在的地址
>
> 3、登录状态跳转登录页或无指定的路由地址，自动登录并重定向至主页`(/hero)`
>
> 4、登录状态跳转指定的路由地址，自动登录并跳转该路由
>
> 5、普通权限用户登录后访问需要管理员权限的路由，跳转`/403`，提示需要管理员权限访问
>
> 6、非管理员权限，隐藏系统管理
>
> 7、token登录半小时后过期并强制下线，重新登录即可

### 浏览器限制

> 通过获取浏览器的内核版本，当`chrome < 90`、`firefox < 90`、`safari < 15`，则跳转`/400`，提示用户升级或更换浏览器

### 版本更新

> 1、首次访问网页，会将最新版的版本号存入本地
>
> 2、更新分为页面（版本）更新和数据（版本）更新
>
> 3、页面版本更新用于手动对浏览器刷新以清除浏览器缓存
>
> 4、每次访问页面，通过本地版本号与远程版本号进行比对
>
> 5、当版本小于远程版本，如果是文件版本，则直接弹出弹窗显示更新日志，要求重启网页
>
> 6、当版本小于远程版本，如果是数据版本，则后台请求数据接口与本地数据进行比对，收集差异文件，并将差异文件进行更新、生成更新日志并弹出更新弹窗

## 系统功能

### 配置项

> 配置信息存在本地
>
> 1、`动画`的三种速率调节：迅速、均衡、优雅
>
> 2、`音效`的开启关闭：开启后，点击、悬浮、消息提醒会带有音效，并支持音量调节
>
> 3、`音乐播放器`的开启关闭：开启后，音乐播放器将在底部显示，支持暂停、播放、上/下一首、音乐列表切换，并支持音量调节
>
> 4、`音乐进度控制`的开启关闭：开启后，点击底部导航栏就可以调整播放进度
>
> 5、`元素线条`的开启关闭：开启后，会显示页面框架线条
>
> 6、`元素阴影`的开启关闭：开启后，文字和元素会显示阴影
>
> 7、`元素发光`的开启关闭：开启后，在一些地方悬浮、选中元素会有发光效果
>
> 8、`粒子特效`的开启关闭：开启后，对性能有一点影响，主要是对登录页`logo`、登录注册按钮、蓝黄红按钮、底部音乐播放器添加粒子效果
>
> 9、`视频背景`的开启关闭：主要是登录页和登录后的背景，`PC`端默认为视频背景，手机端默认为图片背景是为了解决手机端部分浏览器使用视频背景会全屏遮挡的问题，但注意的是重置配置会开启视频背景，手机端如果出现全屏遮挡问题需要刷新浏览器解决
>
> 10、`小贴士`的开启关闭：开启后，在某些场景会触发小贴士，在左上、右上、左下、右下角弹出，介绍一些功能信息，点击确定后不再提示
>
> 11、`恢复所有小贴士`按钮：不再提示的小贴士将恢复提示

### 隐藏功能

> 1、登录页和登录后左上角`logo`点击刷新，长按3秒将提示确认清除数据再刷新，移动端专属
>
> 2、点击左下角显示移动端调试工具，移动端专属

## 页面细节介绍

### 英雄

> 1、列表采用图片懒加载和分页加载
>
> 2、筛选显示支持叠加筛选，但搜索英雄将无视筛选
>
> 3、搜索支持拼音、拼音简写、中文
>
> 4、搜索防抖限制`500ms`
>
> 5、点击英雄卡片再点击`查看详情`进入英雄详情
>
> 6、英雄详情的皮肤语音支持暂停播放、自动播放下一个直至最后一个播放完后终止

### 皮肤

> 1、列表采用图片懒加载和分页加载
>
> 2、封面图做了图片压缩处理
>
> 3、筛选显示支持叠加筛选，但搜索英雄将无视筛选
>
> 4、搜索支持拼音、拼音简写、中文
>
> 5、搜索防抖限制`500ms`
>
> 6、悬浮皮肤卡片查看大图和语音
>
> 7、查看大图支持鼠标滚轮/点击按钮放大、拖动
>
> 8、查看语音支持暂停播放、自动播放下一个直至最后一个播放完后终止

### 系统管理

> 仅支持对英雄、皮肤、技能的添加
>
> 本地数据管理用于管理员添加数据后导出进行更新
