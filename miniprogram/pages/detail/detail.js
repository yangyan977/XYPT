// pages/detail/detail.js
const fetch = require('../../utils/fetch.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      header:'',
      nickName:'',
      phone:'',
    }
  },
  change(e){
   if(e.currentTarget.dataset.id==="name"){
     this.setData({
       "userInfo.nickName":e.detail.value
     })
   }else if(e.currentTarget.dataset.id==="phone"){
    this.setData({
      "userInfo.phone":e.detail.value
    })
   }else{
     this.setData({
       "userInfo.header":e.detail.value
     })
   }
   
  },
  changeImg(){
    var that=this;
    wx.chooseImage({
      count: 1,
      success: (result) => {
       that.setData({
         "userInfo.header":result.tempFilePaths,
       })
      },
    })
  },
  //保存修改的方法
  submit: function(){
    var that =this;
      wx.request({
        method:"POST",
        url:'http://127.0.0.1:3000/',//放置数据库的路径
        data:that.data.userInfo,
        success:function(res){
          wx.showToast({
            title: '提交成功',
            icon:"success",
            duration:2000
          })
        },
        fail: (res) => {
          wx.showToast({
            title: '提交失败',
            icon:"error",
            duration:2000
          })
        },
        complete: (res) => {},
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})