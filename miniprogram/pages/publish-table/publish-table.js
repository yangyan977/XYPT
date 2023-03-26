// pages/publish-table/publish-table.js
const fetch = require('../../utils/fetch.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    takeToken: true,

    express_need: [{
        image: '/images/订单 (3).png',
        text: ' 快递数量',
        placeholder: '请输入快递数量',
        name:'expressNum'
      },
      {
        image: '/images/订单 (3).png',
        text: ' 快递大小',
        placeholder: '请输入快递体积大小，如大件，小件',
        name:'expressVol'
      },
      {
        image: '/images/订单 (3).png',
        text: ' 隐藏备注',
        placeholder: '备注仅接单人可见？填是或否',
        name:'hidden_postscript'
      },
      {
        image: '/images/钱.png',
        text: '金额',
        placeholder: '请输入小费',
        name:'orderCost'
      },

    ],

    tips_take: ['如需拿超大件物品请加价，距离超远没人接单也在备注信息说明可加价，感谢支持！！', '信息仅接单人可见，安全放心！', '更多要求中可以选择快递大小'],
    tips_email: ['如果对快递商家有要求请备注！！', '接单后请私信称重结算', '信息仅接单人可见，安全放心！'],
    // 快递拿寄方面

    //页面渲染数据
    // 快递拿寄方面
    submit_table: false,
    //提交数据
    orderInfo: '',


  },
  //加载图片

  uploadImage() {

    var that = this;
    wx.chooseImage({
      count: 1,
      success: (result) => {
        this.setData({
          'orderInfo.imgurl': result.tempFilePaths
        })
      },
    })
  },
  //转换寄取的按钮
  onClick_type(e) {
    var index = e.currentTarget.dataset.index
    if (index == '取快递' && !this.data.takeToken) {
      this.setData({
        takeToken: !this.data.takeToken
      })
    } else if (index == '寄快递' && this.data.takeToken) {
      this.setData({
        takeToken: !this.data.takeToken
      })
    } else {}
  },

  //表单提交
  submit: function (e) {
    //将页面数组整合
    var time = new Date().toJSON().substring(0, 10) + " //" + new Date().toTimeString().substring(0, 8)
    this.setData({
      "orderInfo.expressNum": e.detail.value.expressNum,
      "orderInfo.orderTime": time,
      "orderInfo.orderType": "取寄快递",
      "orderInfo.expressVol": e.detail.value.expressNum,
      "orderInfo.orderCondition":'等待中',
      "orderInfo.orderFinishpoint": e.detail.value.orderFinishpoint,
      "orderInfo.orderStartpoint": e.detail.value.orderStartpoint,
      "orderInfo.orderCost": e.detail.value.orderCost,
      "orderInfo.postscript": e.detail.value.postscript,
      'orderInfo.hidden_postscript': e.detail.value.hidden_postscript=='是'?true:false
    })
    console.log(this.data.orderInfo)
    // fetch('', this.data.order, 'post').then(res => {
    //   // console.log(res);
    //   // console.log(this.data.order);
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      orderInfo: app.globalData.orderInfo,
    })
    this.setData({
      'orderInfo.userInfo': app.globalData.userInfo
    })
    console.log(this.data.orderInfo)
    // wx.enableAlertBeforeUnload({
    //   title:'提示',
    //   message: '是否要保存数据',
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

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
  onUnload() {},

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