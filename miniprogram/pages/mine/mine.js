// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userBasis: '请先登录',
    userPic: '/images/header.png',
    Login: false,
    funList:[{
      imageurl:'/images/测试申请.png',
      text:'申请接单',
    },
    {
      imageurl:'/images/订单.png',
      text:'我的订单',
    } ,
    {
      imageurl:'/images/客服.png',
      text:'联系客服',
    }
    ] 
  },

  userFunc(e){
  switch (e.currentTarget.dataset.index){
    case 2:{
      wx.showModal({
        title: '客服微信号',
        content: 'Joenashen_',
      })
      break;
    }
    case 0:{
      wx.navigateTo({
        url: '/pages/apply/apply',
      })
      break;
    }
    case 1:{
      wx.navigateTo({
        url: '/pages/myorder/myorder',
      })
      break;
    }
  }
  },
  userLogin() {
    var that = this;
    wx.navigateTo({
      url: '/pages/login/login',
      success() {
        that.setData({
          userName: 'JoeyOL',
          userPic: '/images/头像.jpg',
          Login: true,
          userBasis: '基本信息'
        })
      }
    })
  },
  userInfo(){
    if (this.data.Login){
      wx.navigateTo({
        url: '/pages/detail/detail',
      })
    }else{
      wx.showToast({
        title: '请先登录',
        duration: 1500,
        icon: "error",
        mask:true,
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
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