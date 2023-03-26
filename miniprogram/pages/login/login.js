// pages/login/login.js
//登录短信倒计时
var counter=60;
var settime=function(that){
  if (counter==0){
    that.setData({
      CodeIsClick:true
    })
    counter=60;
    return;
  }else{
    that.setData({
      CodeIsClick:false,
      last_time:counter
    })
    counter--;
  }
  setTimeout(function(){
    settime(that)
  },1000)
}
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  phone:"",
  code:"",
  button:"获取验证码",
  CodeIsClick:true,
  },
  
 onInputPhonenum:function (res) {
   if (res.detail.value.length==11){
    this.setData({
      phone:res.detail.value
    })
    console.log(this.data.phone)
   }
 },
  /**
   * 生命周期函数--监听页面加载
   */
  OnInputCode:function(res) {
    if (res.detail.value.length==4){
      this.setData({
        code:res.detail.value
      })
    }
    console.log(this.data.code)
  },
  
  sendMsg:function (res) {
    var that=this;
    settime(that)
  },

  verifyCode:function (params) {
    wx.showToast({
      title: 'Loading',
      icon:"loading"
    })
    if (this.data.phone=="19128432548"&&this.data.code.length==4){
      wx.navigateTo({
        url: '../mine/mine',
      })
    }
  },

  onLoad(options) {

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