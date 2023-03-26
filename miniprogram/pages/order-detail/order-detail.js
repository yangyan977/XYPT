// pages/order-detail/order-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   tag1:'取',
   tag2:'终',
   conditionColor:'',
   headerColor:'',
   hidden_tag2:false,


   orderInfo:{
     userInfo:{
       header:'/images/runnerImg1.jpg',
       nickName:'Joey'
     },
     accept_token:true,
     orderType:'帮忙做',
     hidden_postscript:false,
     orderCondition:'已完成',
     orderTime:'2023-03-06 19:03',
     orderNum:'',
     expressNum:'1件',
     expressVol:'小件',
     orderStartpoint:'四食堂',
     orderFinishpoint:'荔枝园八栋',
     postscript:'四食堂紫薯粥三份',
     startTime:'2023-03-06 上午',
     finishTime:'2023-03-06 下午',
     imgurl:'/images/假的logo.jpg',
     orderCost:10,
     runnerInfo:{
        header:'/images/runnerImg2.jpg',
        nickName:'David'
     }
   },
   tips:['接单后可在我的订单中查看订单进度','订单完成后请在待确认中确认完成']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.setData({
     orderInfo:JSON.parse(options.id)
   })
      var tag1,tag2,hiddentag2,headerColor,conditionColor;
      var orderType=this.data.orderInfo.orderType,
          orderCondition=this.data.orderInfo.orderCondition
      if (orderType=='取快递'){
        tag1='取',tag2='终',hiddentag2=false,headerColor=''
      }else if (orderType=='寄快递'){
        tag1='取',hiddentag2=true,
        headerColor='linear-gradient(60deg, #96f5d5 0%, white)'
      }else if (orderType=='食堂代取'||orderType=='外卖代取'){
        tag1='取',tag2='终',hiddentag2=false,headerColor='linear-gradient(80deg,#cff09e , white)'
      }else if (orderType=='设备租借'){
        tag1='借',tag2='归',hiddentag2=false,
        headerColor='linear-gradient(80deg, #fdcdc1 0%, white )'
      }else{
        tag1='地点',hiddentag2=true;
        headerColor='linear-gradient(225deg, #FFFEFF 0%, #D7FFFE 100%);'
      }
      
     if (orderCondition=='等待中'){
        conditionColor='#65abf1'
     }else if (orderCondition=='进行中'){
      conditionColor='#66CCCC'
     }else{
      conditionColor='#8ad83c'
     }

      this.setData({
          tag1:tag1,
          tag2:tag2,
          hidden_tag2:hiddentag2,
          headerColor:headerColor,
          conditionColor:conditionColor
      })
      
   
   console.log(this.data.orderInfo)
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