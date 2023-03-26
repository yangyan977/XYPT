// pages/publish/publish.js
const fetch=require('../../utils/fetch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [{
        imageurl: '/images/快递.png',
        descri: '取/寄快递',
      },
      {
        imageurl: '/images/社区食堂-01.png',
        descri: '食堂/外卖代取',
      },
      {
        imageurl: '/images/设备租赁.png',
        descri: '租借设备',
      },
      {
        imageurl: '/images/合作.png',
        descri: '帮忙做',
      }
    ],
     // 显示面板指示点
     indicatorDots: true,
     // 图片自动切换
     autoplay: true,
     // 自动切换时间间隔
     interval: 5000,
     // 滑动动画时长
     duration: 1000
  },
  

  onPublish(e){
    var id=e.currentTarget.dataset.id;
    if (!id){
      wx.navigateTo({
      url: '/pages/publish-table/publish-table',
    })
    }else if (id==1){
      wx.navigateTo({
        url: '/pages/publish-table-canteen/publish-table-canteen'
      })
    }else if (id==2){
      wx.navigateTo({
        url: '/pages/publish-table-borrow/publish-table-borrow'
      })
    }else{
      wx.navigateTo({
        url: '/pages/publish-table-help/publish-table-help'
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 显示模态对话框
    wx.showLoading({
      title:'努力加载中'
    })
    // 请求数据
    fetch('food/index').then((res) => {
      // 请求成功，关闭对话框
      wx.hideLoading();
      // 把接口返回数据setData给listData
      this.setData({
        listData: res.data,
      })
    },() => {
      // 请求失败，关闭对话框，执行fetch.js文件中的fail方法
      wx.hideLoading();
    });
    
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