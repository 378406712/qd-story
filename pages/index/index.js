//index.js
//获取应用实例
const app = getApp()

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    typeArr: [],

    
  },
  //事件处理函数
  onLoad() {
    this.getTypes()
  },
  toList(e){
    let { id, title} = e.currentTarget.dataset
   
    wx.navigateTo({
      url: '/pages/list/list?id='+id+"&title="+title,
    })
  },
  getTypes(){
    let that = this
    wx.request({
      url: "http://route.showapi.com/1700-1",
      data: {
        showapi_appid: 119332,
        showapi_sign: "e017d6f5edae45c6b5d0934eb03f0d4b",
        "classifyId": this.data.id

      },
      success(res){
      
        that.setData({
          typeArr: res.data.showapi_res_body.storylist
        })
      }
    
    })
  }

})