// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let {
      id,
      title
    } = options
    this.setData({
      id
    })
    wx.setNavigationBarTitle({
      title: title

    })
    this.showList()
  },
  showList() {
    let that = this
    wx.request({
      url: 'http://route.showapi.com/1700-2',
      data: {
        showapi_appid: 119332,
        showapi_sign: "e017d6f5edae45c6b5d0934eb03f0d4b",
        "classifyId": this.data.id

      },
      success(res) {
       console.log(res)
        that.setData({
          listArr: res.data.showapi_res_body.contentlist
        })
      }
    })
  },
  toDetail(e) {
    let { id, title } = e.currentTarget.dataset

    wx.navigateTo({
      url: '/pages/details/details?id=' + id + "&title=" + title,
    })
  }

})