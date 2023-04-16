const db = wx.cloud.database();
// pages/publish-table/publish-table.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    takeToken: true,
    tips_take: ['如需拿超大件物品请加价，距离超远没人接单也在备注信息说明可加价，感谢支持！！', '信息仅接单人可见，安全放心！', '更多要求中可以选择快递大小'],
    tips_email: ['如果对快递商家有要求请备注！！', '接单后请私信称重结算', '信息仅接单人可见，安全放心！'],
    // 快递拿寄方面
    //页面渲染数据
    // 快递拿寄方面
    submit_table: false,
    //提交数据


  },
  getaddress(e) {
    this.setData({
        address: e.detail.value
    })
},
  getinnerinformation(e) {
  this.setData({
      innerinformation: e.detail.value
  })
},
  getaddresspoint(e) {
  this.setData({
    addresspoint: e.detail.value
  })
},
  getinformation(e) {
  this.setData({
    information: e.detail.value
  })
},
  getnumber(e) {
  this.setData({
    number: e.detail.value
  })
},
  getvolume(e) {
  this.setData({
    volume: e.detail.value
  })
},
  getmoney(e) {
  this.setData({
    money: e.detail.value
  })
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
  submit() {
    const that = this.data;
    // 提交信息
    db.collection('AddressExpress').add({
        data: {
            address: that.address,
            addresspoint: that.addresspoint,
            information: that.information,
            number: that.number,
            volume:that.volume,
            innerinformation:that.innerinformation,
            money:that.money,
            state: '待审核',
        },
        success: (res) => {
            // 清空输入内容
            this.setData({
              address: '',
              addresspoint: '',
              information: '',
              number: '',
              volume:'',
              innerinformation:'',
              money:'',
            })
            wx.navigateTo({
              url: '../publish/publish',
            })
            wx.showToast({
              title: '提交成功',
            })
        },
        fail: (res) => {
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
        }
    })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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