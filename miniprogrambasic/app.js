// app.js
App({
  globalData: {
    name: "liuyiyi",
    userInfo: {
      token: "m6",
      email: "m6sange@163.com"
    }
  },
  onLaunch() {
    // 1.进行登录操作
    // 2.将登陆成功的数据保存到storage
    // 展示本地存储能力
    const token = wx.getStorageSync('token');
    const userInfo = wx.getStorageSync('userInfo');


    if(!token || !userInfo) {
      wx.setStorageSync('token', "m6");
      wx.setStorageSync('userInfo', { email: "m6sange.com", score: 100 })
    }
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }
})
