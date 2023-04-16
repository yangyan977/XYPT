const db = wx.cloud.database();
// pages/publish-table-canteen/publish-table-canteen.js
const fetch=require('../../utils/fetch.js')
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  canteen:true,
   
  canteen_need:[{
    image:'/images/订单 (3).png',
    text:' 餐品数量',
    placeholder:'请输入餐品数量',
    name:'expressNum',
    input:'getnumber'
    },
    {
      image:'/images/订单 (3).png',
      text:' 隐藏备注',
      placeholder:'备注仅接单人可见？填是或否',
      name:'hidden_postscript',
      input:'getinnerinformation'
    },
    {
      image:'/images/钱.png',
      name:'orderCost',
      input:'getmoney'
    },
],
   
  canteen_tips:['请务必备注准确','总金额是餐品价格加小费'],
  delivery_tips:['请务必备注外卖订单手机尾号','请备注外卖存放地点'],

    //orderInfo:''

  },
  
  onClick_type(e){
  if (e.currentTarget.dataset.index=='食堂'&&!this.data.canteen){
    this.setData({
      canteen:true
    })
  }else if (e.currentTarget.dataset.index=='外卖'&&this.data.canteen){
    this.setData({
      canteen:false
    })
  }else{}
  },

  getaddress(e) {
    this.setData({
        address: e.detail.value
    })
},
  getdestination(e) {
    this.setData({
        destination: e.detail.value
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
  getinnerinformation(e) {
    this.setData({
        innerinformation: e.detail.value
    })
  },
  getmoney(e) {
    this.setData({
        money: e.detail.value
    })
  },
  submit() {
    // 保存this指向，方便复用
    const that = this.data;
    // 提交信息
    db.collection('Meal').add({
        data: {
            address: that.address,
            destination: that.destination,
            information: that.information,
            number: that.number,
            innerinformation:that.innerinformation,
            money:that.money,
            state: '待审核',
        },
        success: (res) => {
          this.setData({
            address: '',
            destination: '',
            information: '',
            number:'',
            innerinformation:'',
            money:''
        })
            wx.showToast({
              title: '提交成功',
            })
            wx.navigateTo({
              url: '../publish/publish',
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
  //提交函数
  /*submit:function(e){

    //将页面数组整合
    var time=new Date().toJSON().substring(0,10)+" "+new Date().toTimeString().substring(0,8)
    this.setData({
      
      "orderInfo.orderTime":time,
      "orderInfo.orderType":"食堂/快递代取",
      "orderInfo.expressNum":e.detail.value.expressNum,
      "orderInfo.orderCondition":'等待中',
      "orderInfo.orderFinishpoint": e.detail.value.orderFinishpoint,
      "orderInfo.orderStartpoint": e.detail.value.orderStartpoint,
      "orderInfo.orderCost":e.detail.value.orderCost,
      "orderInfo.postscript": e.detail.value.postscript,
      "orderInfo.hidden_postscript":e.detail.value.hidden_postscript=='是'?true:false,
    })
    console.log(this.data.orderInfo)
    // fetch('',this.data.order,'post').then(res=>{
    //   console.log(res)
    //   console.log(this.data.orderInfo)
    // })
  },*/
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  /*this.setData({
    orderInfo:app.globalData.orderInfo,
    'orderInfo.userInfo':app.globalData.userInfo
  })*/
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