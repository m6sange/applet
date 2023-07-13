# 小程序注册流程
 注册地址:http://www.mp.weixin.qq.com

 ## 注意事项
 - 每个邮箱仅能申请一个小程序
 - 作为登录帐号，请填写未被微信公众平台注册，未被微信开放平台注册，未被个人微信号绑定的邮箱
 - 一个身份证只能注册5个小程序
 - 一个手机号只能注册5个小程序
 ## AppID
 开发管理 -> 开发设置

## 用vscode开发小程序时推荐插件
- WXML - Language Service 代码高亮
- 小程序开发助手
- wechat snippet 微信小程序代码辅助,代码片段自动完成
# 小程序开发过程中注意事项
1. 直接修改data的数据,不会引起页面刷新.这一点与react相同,与vue不同.这里需要用this.setData()去修改data.
# 小程序的生命周期 
- onLaunch(options) 监听小程序初始化,可以查看以何种方式打开小程序.
  1. 进行用户登录
  2.读取本地保存的数据
  3. 保存token userInfo storage
  4. 发送请求
- onShow() 监听小程序启动或切前台 
- onHide() 监听小程序切后台
- onLoad() 监听页面加载(子页面)
### 子页面拿到app实例 getApp()