// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tabs: ['新发布', '进行中', '已完成'],
    current: 0,
    newPublish: [{
        userInfo: {
          header: '/images/头像.jpg',
          nickName: 'JoeyOL'
        },
        accept_token: false,
        hidden_postscript: 'false',
        postscript: 'what is up',
        orderTime: '2022-12-31',
        orderType: '外卖代取',
        orderNum: '15487958',
        expressNum: '1份',
        expressVol: '',
        orderCondition: '等待中',
        orderStartpoint: '东南门美团外卖',
        orderFinishpoint: '荔枝园8栋',
        orderCost: 5,
        runnerInfo: {
          header: '',
          nickName: '',
        }
      },
      {
        userInfo:{
          header:'/images/头像.jpg',
          nickName:'JoeyOL'
        },
        orderTime: '2022-10-31',
        orderType: '快递代取',
        orderNum: '16451975',
        expressNum:'2个',
        expressVol:'中件',
        orderCondition: '等待中',
        orderStartpoint: '八栋楼下快递',
        orderFinishpoint:'荔枝园10栋',
        accept_token:false,
        hidden_postscript:false,
        postscript:'取件码是23124',
        orderCost: 10,
        runnerInfo:{
           header:'',
           nickName:''
        }
      }
    ],
    running: [{
      userInfo:{
        header:'/images/头像.jpg',
        nickName:'JoeyOL'
      },
      accept_token:'true',
      hidden_postscript:'true',
      postscript:'取件码是2324124，请放在宿舍客厅',
        orderTime: '2022-11-30',
        orderType: '快递代取',
        orderNum: '4532075',
        expressNum:'3件',
        expressVol:'小件',
        orderCondition: '进行中',
        orderStartpoint: '八栋楼下快递',
        orderFinishpoint:'荔枝园9栋',
        orderCost: 10,
        runnerInfo:{
          header:'/images/runnerImg1.jpg',
          nickName: '塔塔开'
        } 
      },
      {
        userInfo:{
          header:'/images/头像.jpg',
          nickName:'JoeyOL'
        },
        accept_token:true,
        hidden_postscript:false,
        postscript:'请务必在中午前放在宿舍客厅中',
        orderTime: '2022-12-30',
        orderType: '食堂代取',
        orderNum: '4545305',
        expressNum:'一份',
        expressVol:'',
        orderCondition: '进行中',
        orderStartpoint: '4食堂紫薯粥一份',
        orderFinishpoint:'荔枝园4栋',
        orderCost: 8,
        runnerInfo:{
          header:'/images/runnerImg2.jpg',
          nickName:'Acmer'
        }
      }
    ],
    finish: [{
      userInfo:{
         header:'/images/头像.jpg',
         nickName:'JoeyOL'
      },
      accept_token:true,
      hidden_postscript:false,
      postscript:'今天下午前请送至A栋502',
        orderTime: '2023-01-03',
        orderType: '快递代取',
        orderNum: '4532075',
        expressNum:'1个',
        expressVol:'大件',
        orderCondition: '已完成',
        orderStartpoint: '八栋楼下快递',
        orderFinishpoint:'A栋502研究生工位',
        orderCost: 10,
        runnerInfo:{
          header:'/images/runnerImg1.jpg',
          nickName:'塔塔开'
        }
      },
      {
        userInfo:{
          header:'/images/头像.jpg',
          nickName:'JoeyOL'
        },
        accept_token:true,
        hidden_postscript:true,
        postscript:'四食堂日照烧鸡饭一份，今天中午前送到10栋',
        orderTime: '2022-12-31',
        orderType: '食堂代取',
        orderNum: '4545305',
        expressNum:'2份',
        expressVol:'',
        orderCondition: '已完成',
        orderStartpoint: '4食堂',
        orderFinishpoint:'10栋2304客厅',
        orderCost: 8,
        runnerInfo:{
          header:'/images/runnerImg2.jpg',
          nickName:' 快乐胖子'
        }
      }
    ]
  },
  tabSelect: function (e) {
    var current = e.currentTarget.dataset.id
    this.setData({
      current: current
    })
  },

  orderDetail(e) {
    var id = e.currentTarget.dataset.index;
    id=JSON.stringify(id)
    wx.navigateTo({
      url: '/pages/order-detail/order-detail?id=' + id,
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