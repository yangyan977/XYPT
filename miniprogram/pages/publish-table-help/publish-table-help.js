const db = wx.cloud.database();
// pages/publish-table-help/publish-table-help.js
const fetch=require('../../utils/fetch.js')
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_container:[
      {
        image:'/images/收货地址 (2).png',
        text:'求助地点',
        placeholder:'请输入地址',
        name:"orderStartpoint",
        input:"getplace"
      },
      {
        image:'/images/时间.png',
        text:'开始时间',
        placeholder:'请输入开始时间',
        name:"startTime",
        input:'getStartTime'
      },
      {
        image:'/images/时间.png',
        text:'结束时间',
        placeholder:'请输入结束时间',
        name:'finishTime',
        input:"getfinishTime"
      },
      {
        image:'/images/收货地址 (2).png',
        text:'隐藏备注',
        placeholder:'备注仅接单人可见？填是或否',
        name:'hidden_postscript',
        input:"getinnerinformation"
      },
      {
        image:'/images/钱.png',
        text:'金额',
        placeholder:'请输入小费',
        name:"orderCost",
        input:'getmoney'
      }
    ],

    help_tips:['地址时间务必准确!'],
    //orderInfo:''
  },
  submit() {
    const that = this.data;
    // 提交信息
    db.collection('Help').add({
        data: {
            incident: that.incident,
            place: that.place,
            StartTime: that.StartTime,
            finishTime: that.finishTime,
            innerinformation:that.innerinformation,
            money:that.money,
            state: '待审核',
        },
        success: (res) => {
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
getincident(e) {
  this.setData({
    incident: e.detail.value
  })
},
getplace(e) {
  this.setData({
      place: e.detail.value
  })
},
getStartTime(e) {
  this.setData({
    StartTime: e.detail.value
  })
},
getfinishTime(e) {
  this.setData({
    finishTime: e.detail.value
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
  //提交函数
  /*
  submit:function(e){
     //将页面数组整合
     var time=new Date().toJSON().substring(0,10)+" "+new Date().toTimeString().substring(0,8)
     this.setData({
       
       "orderInfo.orderTime":time,
       "orderInfo.orderType":"帮忙做",
       "orderInfo.orderCondition":'等待中',
       "orderInfo.orderStartpoint": e.detail.value.orderStartpoint,
       "orderInfo.orderCost":e.detail.value.orderCost,
       "orderInfo.postscript": e.detail.value.postscript,
       "orderInfo.startTime":e.detail.value.startTime,
       "orderInfo.finishTime":e.detail.value.finishTime,
       "orderInfo.hidden_postscript":e.detail.value.hidden_postscript=='是'?true:false,
     })
    fetch('',this.data.order,'post').then(res=>{
      // console.log(res)
      // console.log(e.detail.value)
    })
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