// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    myStory:[],
    nickName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  login(e){
 
    if (e.detail.userInfo){
      wx.setStorageSync("nickName", e.detail.userInfo.nickName)
      this.getStoragesStory()
  
    }
    
  },  
  getStoragesStory(){
    let nickName = wx.getStorageSync("nickName")
    let storys = wx.getStorageSync("storys")||[]
    let myStory = storys.filter((item,index)=>{
      return item.nickName == nickName 
    })
    this.setData({
      flag: false,
      myStory,
      nickName
    })
  },


  onShow(){
    let that = this
  wx.getSetting({

    success(res){
    
      if (res.authSetting['scope.userInfo']){
        that.getStoragesStory()
    
      } else{
        that.setData({
          flag:true
        })
      }
    }
  })
  }
  ,
  toDetail(e) {
    let { id, title } = e.currentTarget.dataset

    wx.navigateTo({
      url: '/pages/details/details?id=' + id + "&title=" + title,
    })
  }

})