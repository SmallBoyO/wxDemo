// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      rankType:'piao',
      rankList:[
        {
          headImage:'../../images/detail1.jpg',
          name:'姜佩佩 9号',
          piaoNum:103900,
          giftNum:8137,
          desc:'给我一个舞台,还你一片精彩'
        },
        {
          headImage: '../../images/detail1.jpg',
          name: '姜佩佩 9号',
          piaoNum: 103900,
          giftNum: 8137,
          desc: '给我一个舞台,还你一片精彩'
        },
        {
          headImage: '../../images/detail1.jpg',
          name: '姜佩佩 9号',
          piaoNum: 103900,
          giftNum: 8137,
          desc: '给我一个舞台,还你一片精彩'
        },
        {
          headImage: '../../images/detail1.jpg',
          name: '姜佩佩 9号',
          piaoNum: 103900,
          giftNum: 8137,
          desc: '给我一个舞台,还你一片精彩'
        },
        {
          headImage: '../../images/detail1.jpg',
          name: '姜佩佩 9号',
          piaoNum: 103900,
          giftNum: 8137,
          desc: '给我一个舞台,还你一片精彩'
        },
        {
          headImage: '../../images/detail1.jpg',
          name: '姜佩佩 9号',
          piaoNum: 103900,
          giftNum: 8137,
          desc: '给我一个舞台,还你一片精彩'
        },
        {
          headImage: '../../images/detail1.jpg',
          name: '姜佩佩 9号',
          piaoNum: 103900,
          giftNum: 8137,
          desc: '给我一个舞台,还你一片精彩'
        }
      ]
  },
  changeRankTypeToPiao(){
      this.setData({
        rankType: 'piao'
      })
  },
  changeRankTypeToGift() {
    this.setData({
      rankType: 'gift'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})