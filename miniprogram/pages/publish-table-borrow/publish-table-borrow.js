// pages/publish-table-borrow/publish-table-borrow.js
const fetch=require('../../utils/fetch.js')
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo:'',
    input_container:[
      {
        image:'/images/时间.png',
        text:'预计租借时间',
        placeholder:'请输入开始时间',
        name:'startTime'
      },
      {
        image:'/images/时间.png',
        text:'预计归还时间',
        placeholder:'请输入归还时间',
        name:'finishTime',
      },
      {
        image: '/images/订单 (3).png',
        text: '租借数量',
        placeholder: '请输入快递数量',
        name:'expressNum'
      },
      {
        image:'/images/收货地址 (2).png',
        text:'隐藏备注',
        placeholder:'备注仅接单人可见？填是或否',
        name:'hidden_postscript'
      },
      
      {
        image:'/images/钱.png',
        text:'金额',
        placeholder:'请输入小费',
        name:"orderCost",
      }
    ],
    borrow_tips:['归还时间务必准确','如果需要送货上门请备注地址']
  },
  //提交函数
  submit:function(e){
    //将页面数组整合
    var time=new Date().toJSON().substring(0,10)+" "+new Date().toTimeString().substring(0,8)
    this.setData({
      
      "orderInfo.orderTime":time,
      "orderInfo.orderType":"租借设备",
      "orderInfo.expressNum":e.detail.value.expressNum,
      "orderInfo.orderCondition":'等待中',
      "orderInfo.orderCost":e.detail.value.orderCost,
      "orderInfo.postscript": e.detail.value.postscript,
      "orderInfo.startTime":e.detail.value.startTime,
      "orderInfo.finishTime":e.detail.value.finishTime,
      "orderInfo.hidden_postscript":e.detail.value.hidden_postscript=='是'?true:false,
    })
    fetch('',this.data.order,'post').then(res=>{
      console.log(res)
      console.log(this.data.orderInfo)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    this.setData({     
      orderInfo:app.globalData.orderInfo,
      "orderInfo.userInfo":app.globalData.userInfo
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