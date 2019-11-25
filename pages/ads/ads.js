let timer;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:4,
    imgArr: ["/pic/0.jpg", "/pic/1.jpg", "/pic/3.jpg", "/pic/index.jpg"]
     
  },
  jump(){
    if (timer) clearInterval(timer)
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
,
  times(){
    if(timer)clearInterval(timer)
    timer = setInterval(()=>{
      this.data.num--
      if(this.data.num<1){
        if (timer) clearInterval(timer)
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
      this.setData({
        num: this.data.num
      })
    },1000)

  },

  onLoad: function (options) {
    this.times();

  }
})