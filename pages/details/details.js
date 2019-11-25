// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    this.showText()
  }
  , showText() {


    let that = this
    let id = that.data.id
    wx.request({
      url: 'http://route.showapi.com/1700-3',
      data: {
        showapi_appid: 119332,
        showapi_sign: "e017d6f5edae45c6b5d0934eb03f0d4b",
        "id": this.data.id

      },
      success(res) {
        console.log(res)
        that.setData({
          article: res.data.showapi_res_body.content
        })
        let nickName = wx.getStorageSync("nickName") || ''

        if (nickName) {
          //如果有nickName 证明登录过了，就做缓存
          //判断是否是第一次访问，是第一次就添加缓存 
          let storys = wx.getStorageSync('storys') || []
          //判断storys是否有值
          if (storys.length) {
            //如果有长度，证明有值
            //判断当前用户下，缓存中有无的那个故事信息
            let myinfo = storys.filter((item,index)=>{
              //filter过滤storys,拿到当前用户的缓存
              return item.nickName == nickName
            })
            let result = myinfo.findIndex((item,index)=>{
                return item.id == id
            })
            //判断result 是否为-1。是，则代表当前无这条故事信息
            if(result == -1){
              //当前无这条信息
              let content = res.data.showapi_res_body
              content.nickName = nickName
              storys.push(content)
              wx.setStorageSync("storys", storys)
            }

          }
          else {
         
            let content = res.data.showapi_res_body
            content.nickName = nickName
            storys.push(content)
            wx.setStorageSync("storys", storys)
            
          }
        }
      }
      
    })

  
  }

  
})