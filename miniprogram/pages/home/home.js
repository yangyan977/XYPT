// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


    nav_bar:['取/寄快递','设备租借','食堂/外卖','帮忙做'],
    page_id:0,

    express_order: [{
      userInfo: {
        header: '/images/头像.jpg',
        nickName: 'Joey',
      },
      accept_token:false,
      hidden_postscript:false,
      orderCondition: '等待中',
      orderNum:'22574852',
      orderTime: '2023-02-22 12:30:55',
      orderType: '取快递',
      imgurl:'',
      postscript:'在6栋背后的玻璃房内，号码是25480', 
      expressNum: '2个',
      expressVol: '大件',
      orderStartpoint: '八栋楼下快递柜',
      orderFinishpoint: '荔园七栋',
      orderCost: '5',
      runnerInfo:{
        header:'',
        nickName:''
      }
    }],

    canteen_order: [{
      userInfo: {
        header: '/images/runnerimg1.jpg',
        nickName: 'Alien',
      },
      accept_token:false,
      hidden_postscript:false,
      orderType: '食堂代取',
      orderNum:'2259423',
      postscript:'麻烦帮忙带一份四食堂二楼的绝味螺狮粉',
      orderCondition: '等待中',
      orderTime: '2023-02-23 19:22:45',
      expressNum: '1',
      expressVol:'',
      orderStartpoint: '四食堂二楼',
      orderFinishpoint: '荔园8栋1802C',
      orderCost: '30',
      runnerInfo:{
        header:'',
        nickName:'',
      }
    },
    {
      userInfo: {
        header: '/images/runnerimg2.jpg',
        nickName: '快乐胖子',
      },
      accept_token:false,
      hidden_postscript:false,
      orderNum:"2558843",
      postscript:'四食堂一楼的小笼包一份', 
      orderType: '食堂代取',
      orderCondition: '等待中',
      orderTime: '2023-02-23 19:22:45',
      expressNum: '1份',
      expressVol:'',
      orderStartpoint: '四食堂',
      orderFinishpoint: '荔园7栋',
      orderCost: '30',
      runnerInfo:{
        header:"",
        nickName:''
      }
    }
  ],

    borrow_order: [{
      userInfo: {
        header: '/images/runnerimg1.jpg',
        nickName: 'LucyDavid',
      },
      accept_token:false,
      hidden_postscript:false,
      orderNum:'2561323',
      postscript:'想要租借一套螺丝刀装备，麻烦送到荔枝园5栋1903A',
      orderType: '设备租借',
      orderCondition: '等待中',
      orderTime: '2023-02-23 19:22:45',
      expressNum: '1个',
      expressVol:'',
      orderStartpoint: '今天下午',
      orderFinishpoint: '后天上午',
      orderCost: '5',
      runnerInfo:{
        header:"",
        nickName:''
      }
    }],

    help_order: [{
      userInfo: {
        header: '/images/header.png',
        nickName: 'Nobody',
      },
      accept_token:false,
      hidden_postscript:false,
      orderNum:'2463134',
      postscript:'希望有人能帮忙打扫以下宿舍，在十栋1802',
      orderType: '帮忙做',
      orderCondition: '等待中',
      orderTime: '2023-02-23 19:22:45',
      startTime: '明天下午',
      finishTime: '明天下午',
      orderCost: '5',
      orderStartpoint: '荔园10栋',
      runnerInfo:{
        header:'',
        nickName:''
      }
    }]

  },
  
  ClickOrderDetail(e){
     let index=JSON.stringify(e.currentTarget.dataset.index)
    console.log(index)
     wx.navigateTo({
       url: '/pages/order-detail/order-detail?id='+index,
     })
  },

  ClassifyOrder(e){
    var index=e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      page_id:index
    })
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