var t = getApp();

Page({
  data: {},
  onLoad: function (t) {
    console.log(t), this.setData({
      close: t.close,
      text: t.text
    });
  },
  onShow: function () {
    var e = wx.getStorageSync('platform').name;
    wx.setNavigationBarTitle({
      title: e || "提示"
    });
  },
  bind: function () {
    var t = this, e = setInterval(function () {
      wx.getSetting({
        success: function (n) {
          console.log(n)
          var a = n.authSetting["scope.userInfo"];
          a && (wx.reLaunch({
            url: "../logs/logs"
          }), clearInterval(e), t.setData({
            userInfo: a
          }));
        }
      });
    }, 1e3);
  }
});