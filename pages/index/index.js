//index.js
//获取应用实例
const app = getApp()
import {list} from '../../data/data_index.js'

Page({
  data: {
    searchValue: '',// 搜索输入框内容
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bannerUrl:"../../images/banner.jpg",
    actorList:[],
    curPage:1,
    pageNum:6,
    listLoading: "查看更多",//是否在加载中
    isMore:true,//是否还有更多数据
  },
  /** 事件处理函数 */

  // 点击跳转详情页面
  goDetail: function(event) {
    var data = (event.currentTarget.dataset)
    wx.navigateTo({
      url: '../detail/detail?detailId=' + data.detailId
    })
  },
  // 绑定搜索框输入内容
  bindSearchInput:function(e){
    this.setData({
      searchValue: e.detail.value
    })
  },

  // 搜索报名列表
  searchList:function(){

  },

  onLoad: function () {
    this.getList()
  },
  getList(){
    let begin = (this.data.curPage - 1) * this.data.pageNum
    let end = this.data.curPage * this.data.pageNum
    this.setData({
      actorList: [...this.data.actorList,...list.slice(begin, end)],
      curPage: this.data.curPage + 1,
      listLoading: "查看更多"
    })
    if (this.data.actorList.length>=20){
      this.setData({
        isMore: false
      })
    }
  },
  getMoreByPage(){
    this.setData({
      listLoading:"努力加载中..."
    }),
    setTimeout(this.getList,1500)
  }
})
